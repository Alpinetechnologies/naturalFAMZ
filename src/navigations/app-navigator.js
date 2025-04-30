import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  CartIcon,
  DrawerMenu,
  GoBack,
  LogoutIcon,
} from '../components/header-components';
import {StyleSheet, View, Image} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/app/Home/home';
//import BottomTabNavigator from './bottom-tab-navigator';

import AddProduct from '../screens/app/products/add-product/add-product';
import Label from '../screens/app/product-library/label/label';
import Categories from '../screens/app/product-library/categories/categories';
import ProductsList from '../screens/app/products/product-list/product-list';
import ProductSubCategory from '../screens/app/product-library/product-sub-category/product-sub-category';
import ProductDetail from '../screens/app/product-library/product-detail/product-detail';
import StorePerformance from '../screens/app/store-performance/store-performance';
import OrderTopTabs from '../screens/app/order-managemnet/order-top-tabs/order-top-tabs';
import {IMAGES} from '../constants/images';
import ProductLising from '../screens/app/product-library/product-list/product-list';

const Stack = createStackNavigator();

export default function AppNavigator({userProfile}) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerLeft: () => <GoBack />,
          headerTitleStyle: styles.headerTitle,
        }}>
        <Stack.Screen
          name="App"
          component={AppStackNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerLeft: () => <GoBack />,
        headerStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        headerTitleStyle: styles.headerTitle,
      }}>
      {/*  <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      /> */}

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Natural Farmz',
          headerRight: () => <LogoutIcon />,
          headerLeft: null,
        }}
      />

      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{title: '+ Add Product'}}
      />

      <Stack.Screen
        name="Label"
        component={Label}
        options={{
          title: 'Product library',
        }}
      />

      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Select Category',
        }}
      />

      <Stack.Screen
        name="ProductList"
        component={ProductsList}
        options={{
          title: 'My product list',
        }}
      />

      <Stack.Screen
        name="ProductSubCategory"
        component={ProductSubCategory}
        options={{
          title: 'Product Sub Category',
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: 'Product Details',
        }}
      />

      <Stack.Screen
        name="StorePerformance"
        component={StorePerformance}
        options={{
          title: 'Store Details',
        }}
      />

      <Stack.Screen
        name="ProductLising"
        component={ProductLising}
        options={{
          title: 'Product List',
        }}
      />

      <Stack.Screen
        name="OrderTopTabs"
        component={OrderTopTabs}
        options={{
          title: 'Order History',
          headerLeft: () => <GoBack />,
          headerBackVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 15,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primaryBold,
  },
  logo: {
    height: 41,
    width: 110,
    resizeMode: 'contain',
  },
});
