import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {COLORS} from '../../../../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
export default function PendingOrders() {
  const [minute, setMinute] = useState(0);

  const pendinglist = [{ordertype: '0'}, {}, {ordertype: '0'}];

  const itemlist = [{}, {}];
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const canreason = [
    {reason: 'Products not available', id: '0'},
    {reason: 'Store related issue', id: '1'},
    {reason: 'Some problems have occured', id: '2'},
    {reason: 'High Order Rush', id: '3'},
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {pendinglist.map((data, i) => (
          <View style={styles.card} key={i}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <Text style={styles.time}>25 April{'   '}08:40 pm</Text>
              {data.ordertype === '0' ? (
                <View style={styles.oderbox}>
                  <Text style={styles.order}>Instant Order</Text>
                </View>
              ) : (
                <View
                  style={[styles.oderbox, {backgroundColor: COLORS.SKY_BLUE}]}>
                  <Text style={styles.order}>Schdueled Order</Text>
                </View>
              )}
            </View>

            <Text style={styles.ordertxt}>
              Order Code:{' '}
              <Text style={styles.ordercode}>MTTGR43746DGCJCCUEF</Text>
            </Text>
            <Text style={[styles.ordertxt, {fontSize: 12}]}>Orders:-</Text>
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
          </View>
        ))}

        <Modal
          onBackdropPress={() => setModalVisible(!isModalVisible)}
          isVisible={isModalVisible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.modalContainer}>
              <Text style={styles.modaltoptxt}>
                Why you want to reject{'\n'}the order
              </Text>
              <View style={styles.ratioBtnContainer}>
                {canreason.map((data, k) => (
                  <TouchableOpacity
                    key={k}
                    style={styles.radioBtnListRow}
                    onPress={() => setSelectedType(data.id)}>
                    <View style={styles.radioBtn}>
                      {data.id === selectedType && (
                        <View style={styles.selectedRadioBtn} />
                      )}
                    </View>
                    <Text style={styles.subHeading}>{data.reason}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity
                style={styles.cancleBtn}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.cancleBtnTxt}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
