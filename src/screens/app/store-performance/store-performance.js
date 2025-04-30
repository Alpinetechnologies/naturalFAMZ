import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../constants/colors';
import {IMAGES} from '../../../constants/images';
export default function StorePerformance() {
  const delivererlists = [{}, {}, {}];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={IMAGES.STORE}
          style={styles.storeimg}
          imageStyle={{
            borderRadius: 12,
            backgroundColor: COLORS.TRANSPARENT_WHITE,
          }}>
          <View
            style={{
              backgroundColor: COLORS.TRANSPARENT_BLACK,
              padding: 15,
              borderWidth: 0,
              paddingTop: 150,
              borderRadius: 12,
            }}>
            <Text style={styles.storename}>Natural Farmz</Text>
            <Text style={styles.time}>Opens: 10 am Close: 12 pm </Text>
          </View>
        </ImageBackground>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.profitbox}>
            <Text style={styles.profit}>Today’s Profit</Text>
            <Text style={styles.totalprofit}>₹2,990</Text>
          </View>
          <View style={styles.profitbox}>
            <Text style={styles.profit}>Today Sales</Text>
            <Text style={styles.totalprofit}>₹12,990</Text>
          </View>
        </View>
        <View style={styles.topcontainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.orderBox}>
              <Text style={styles.orderdeliver}>Order Delivered</Text>
              <Text style={styles.totalorder}>90</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.totalamount}>₹12,990</Text>
                <TouchableOpacity>
                  <Text style={styles.viewtxt}>view</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.orderBox}>
              <Text style={styles.orderdeliver}>Order Cancelled</Text>
              <Text style={styles.totalorder}>10</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.totalamount, {color: '#F20007'}]}>
                  ₹2,990
                </Text>
                <TouchableOpacity>
                  <Text style={styles.viewtxt}>view</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.orderBox}>
              <Text style={styles.orderdeliver}>Order Returned</Text>
              <Text style={styles.totalorder}>10</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.totalamount, {color: '#FFB730'}]}>
                  ₹12,990
                </Text>
                <TouchableOpacity>
                  <Text style={styles.viewtxt}>view</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.topcontainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Text style={styles.todaytransaction}>Today Transaction</Text>
              <View style={styles.flexRow}>
                <Text style={styles.totaltransaction}>₹ 20,982.00</Text>
                <Text style={styles.from}>+ 10% from yesterday</Text>
              </View>
              <Text style={styles.todaydeliverorder}>
                113 Orders delivered today
              </Text>
              <View style={styles.flexRow}>
                <View style={{flex: 1}}>
                  <Text style={styles.thisweek}>This week</Text>
                  <Text style={styles.weekamount}>₹ 20,982.00</Text>
                  <Text style={styles.fromweek}>- 6% from last week</Text>
                </View>
                <View>
                  <Text style={styles.thisweek}>This month ( July )</Text>
                  <Text style={styles.weekamount}>₹ 20,982.00</Text>
                  <Text style={styles.fromweek}>+ 8% from last month</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.todaytransaction}>Today Profit</Text>
              <View style={styles.flexRow}>
                <Text style={styles.totaltransaction}>₹ 20,982.00</Text>
                <Text style={styles.from}>+ 10% from yesterday</Text>
              </View>
              <Text style={styles.todaydeliverorder}>
                113 Orders delivered today
              </Text>
              <View style={styles.flexRow}>
                <View style={{flex: 1}}>
                  <Text style={styles.thisweek}>This week</Text>
                  <Text style={styles.weekamount}>₹ 20,982.00</Text>
                  <Text style={styles.fromweek}>- 6% from last week</Text>
                </View>
                <View>
                  <Text style={styles.thisweek}>This month ( July )</Text>
                  <Text style={styles.weekamount}>₹ 20,982.00</Text>
                  <Text style={styles.fromweek}>+ 8% from last month</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.topcontainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.ordercancelcard}>
              <Text style={styles.heading}>Order Cancelled ( customer )</Text>
              <Text style={styles.points}>1. Taking too long for delivery</Text>
              <View style={styles.label}>
                <View style={styles.lebelred} />
              </View>

              <Text style={styles.points}>2. I will not be available</Text>
              <View style={styles.label}>
                <View style={styles.lebelred2} />
              </View>

              <Text style={styles.points}>3. Price is too much</Text>
              <View style={styles.label}>
                <View style={styles.lebelred3} />
              </View>
            </View>

            <View style={styles.ordercancelcard}>
              <Text style={styles.heading}>Order Rejected</Text>
              <Text style={styles.points}>1. Products are not available</Text>
              <View style={styles.label}>
                <View style={styles.lebelred} />
              </View>

              <Text style={styles.points}>2. Some problem in store</Text>
              <View style={styles.label}>
                <View style={styles.lebelred2} />
              </View>

              <Text style={styles.points}>3. High order rush</Text>
              <View style={styles.label}>
                <View style={styles.lebelred3} />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
