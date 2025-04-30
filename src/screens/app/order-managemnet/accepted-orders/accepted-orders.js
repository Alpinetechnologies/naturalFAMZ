import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {COLORS} from '../../../../constants/colors';
export default function AcceptedOrders() {
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
              <Text style={styles.time}>23 April{'   '}08:40 pm</Text>
              <View style={styles.oderbox}>
                <Text style={styles.order}>Instant Order</Text>
              </View>
            </View>

            <Text style={styles.ordertxt}>
              Order Code:{' '}
              <Text style={styles.ordercode}>MTTGR43746DGCJCCUEF</Text>
            </Text>
            <Text style={[styles.ordertxt, {fontSize: 12}]}>Orders:-</Text>
            <View
              style={{
                paddingVertical: 10,
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
