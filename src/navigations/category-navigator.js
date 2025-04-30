import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';
import {DrawerMenu, LogoutIcon} from '../components/header-components';

import Category from '../screens/app/categories/category/category';

const Stack = createNativeStackNavigator();

export default function CategoryNavigator() {
  // const {userProfile} = React.useContext(AuthContext);
  // console.log(userProfile);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,

        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        headerTitleAlign: 'left',
      }}>
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          title: 'Categories',
          // headerLeft: () => DrawerMenu(),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    color: COLORS.WHITE,
    textTransform: 'capitalize',
    fontFamily: FONT_FAMILY.primaryMedium,
    paddingLeft: 8,
  },
  headerBtn: {
    fontSize: 10,
    color: COLORS.WHITE,
    textTransform: 'capitalize',
    fontFamily: FONT_FAMILY.primaryMedium,
    marginRight: 5,
    backgroundColor: COLORS.LIGHT_BLACK,
    marginTop: 1,
    paddingHorizontal: 10,
    paddingVertical: 1.5,
    borderRadius: 4,
  },

  iconStyleRight: {
    marginRight: 15,
    height: 50,
    width: 100,
    resizeMode: 'contain',
  },
});
