import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {COLORS} from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/font-family';
import PendingOrders from '../pending-orders/pending-orders';
import AcceptedOrders from '../accepted-orders/accepted-orders';
import ReadyToDeliverOrder from '../ready-to-deliver-order/ready-to-deliver-order';
import DeliveredOrders from '../delivered-orders/delivered-orders';

const Tab = createMaterialTopTabNavigator();

export default function OrderTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: true,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.PRIMARY,
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.primarySemiBold,
          fontSize: 12,
        },
        tabBarIndicatorStyle: {height: 5, borderRadius: 4},
        tabBarActiveTintColor: '#14213D',
        tabBarInactiveTintColor: COLORS.GREY,
      }}>
      <Tab.Screen
        name="PendingOrders"
        component={PendingOrders}
        options={{tabBarLabel: 'Pending'}}
      />
      <Tab.Screen
        name="AcceptedOrders"
        component={AcceptedOrders}
        options={{tabBarLabel: 'Accepted'}}
      />
      <Tab.Screen
        name="ReadyToDeliverOrder"
        component={AcceptedOrders}
        options={{tabBarLabel: 'Ready To Deliver'}}
      />
      <Tab.Screen
        name="DeliveredOrders"
        component={AcceptedOrders}
        options={{tabBarLabel: 'Delivered'}}
      />
    </Tab.Navigator>
  );
}
