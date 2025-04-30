import * as React from 'react';
import {StatusBar} from 'react-native';
import {AuthContext} from './auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import AuthNavigator from './src/navigations/auth-navigator';
import AppNavigator from './src/navigations/app-navigator';
import API from './src/actions/api';

export default function EntryPoint({}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            userId: action.id,
            isLoading: false,
            userProfile: action.userProfile,
            cartCount: action.cartCount,
          };

        case 'USER_PROFILE':
          return {
            ...prevState,
            userProfile: action.userProfile,
          };

        case 'SIGN_IN':
          return {
            ...prevState,
            isLoggedIn: true,
            userToken: action.token,
            userId: action.id,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isLoggedIn: false,
            userToken: null,
            userId: null,
            userProfile: null,
            cartCount: 0,
          };

        case 'CART_COUNT':
          return {
            ...prevState,
            cartCount: action.cartCount,
          };
      }
    },
    {
      isLoading: true,
      isLoggedIn: false,
      userToken: null,
      userId: null,
      userProfile: null,
      cartCount: 0,
    },
  );

  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('accessToken');
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(state);

  const checkAuthData = async () => {
    let userToken;
    let userId;
    let userProfile = null;
    let cartCount = 0;

    try {
      userToken = await AsyncStorage.getItem('accessToken');
      userId = await AsyncStorage.getItem('userId');

      if (userToken && userId) {
        const profile = await API.getCompanyProfile();
        const cart = await API.getCartList();

        if (profile.success === 'true') {
          userProfile = profile.extraData.profile;

          if (cart.success === 'true') {
            cartCount = cart.extraData.cart.length;
          } else {
            cartCount = 0;
          }
        } else {
          logoutUser();
        }
        SplashScreen.hide();
      } else {
        SplashScreen.hide();
      }
    } catch (e) {
      console.log(e);
    }

    dispatch({
      type: 'RESTORE_TOKEN',
      token: userToken,
      id: userId,
      userProfile: userProfile,
      cartCount: cartCount,
    });
  };

  React.useEffect(() => {
    checkAuthData();

    return () => {
      checkAuthData();
    };
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SIGN_IN', token: data.token, id: data.id});
      },
      signOut: async () => dispatch({type: 'SIGN_OUT'}),
      updateUserProfile: async data => {
        dispatch({type: 'USER_PROFILE', userProfile: data.userProfile});
      },
      updateCartCount: async data =>
        dispatch({type: 'CART_COUNT', cartCount: data.cartCount}),
    }),
    [],
  );

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <AuthContext.Provider
        value={{
          authContext,
          userProfile: state.userProfile,
          cartCount: state.cartCount,
        }}>
        {state.userToken == null || state.userId == null ? (
          <AuthNavigator />
        ) : (
          <AppNavigator />
        )}
      </AuthContext.Provider>
    </>
  );
}
