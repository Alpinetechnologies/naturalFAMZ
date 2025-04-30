import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {COLORS} from '../../../../constants/colors';

export default function ReadyToDeliverOrder(props) {
  const acceptorder = [{}, {}, {}];
  const itemlist = [{}, {}];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {acceptorder.map((data, j) => (
          <View style={styles.card} key={j}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <Text style={styles.deliverto}>Deliver to</Text>
              <View style={styles.oderbox}>
                <Text style={styles.order}>Instant Order</Text>
              </View>
            </View>

            <Text style={styles.addressline}>Saumik Sarkar / 8250292291</Text>
            <Text style={styles.addressline}>
              S.P Mukherjee Road, Mohishila,
            </Text>
            <Text style={styles.addressline}>Asansol Pin- 713303</Text>
            <Text style={styles.ordertxt}>Order ID</Text>
            <Text style={styles.ordercode}>MTTGR43746DGCJCCUEF</Text>
            <View
              style={{
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderColor: COLORS.GREY,
                borderStyle: 'dotted',
              }}>
              {itemlist.map((data, i) => (
                <View style={styles.itemContainer} key={i}>
                  <Image
                    source={{
                      uri: 'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji.jpg',
                    }}
                    style={styles.itemimg}
                  />
                  <View style={{flex: 1}}>
                    <Text style={styles.itmname}>Mohan Bhog Atta</Text>
                    <Text style={styles.itmname}> 5kg</Text>
                  </View>
                  <View>
                    <Text style={styles.salerate}>₹200.00</Text>
                    <Text style={styles.mrp}>₹200.00</Text>
                  </View>
                </View>
              ))}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.totalBill}>Total Bill:- 1400.00</Text>
              <View style={styles.paidBox}>
                <Text style={styles.paid}>Paid</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.processingBtn}
              onPress={() => props.navigation.navigate('DelivererList')}>
              <Text style={styles.processingTxt}>Assign a deliverer</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.deliverTime}>Delivery time:- 20 min</Text>
              <View style={styles.adddBtn}>
                <Text style={styles.add}>+ Add 10 min</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
