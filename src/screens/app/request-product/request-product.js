import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../../../constants/colors';

import Dropdown from '../../../components/dropdown';

export default function RequestProduct() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.qtyContainer}>
          <Text style={styles.selectqty}>Select quantity</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.touchBtn}>
              <Feather name="minus" color={COLORS.WHITE} size={16} />
            </TouchableOpacity>
            <Text style={styles.qty}>1</Text>
            <TouchableOpacity style={styles.touchBtn}>
              <Feather name="plus" color={COLORS.WHITE} size={16} />
            </TouchableOpacity>
          </View>
        </View>
        <Dropdown placeholder="Select pack of" />
        <Dropdown placeholder="Select product quantity" />
        <TextInput
          placeholderTextColor={COLORS.BLACK}
          placeholder="Set price"
          keyboardType="number-pad"
          style={styles.input}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TextInput
              placeholderTextColor={COLORS.BLACK}
              placeholder="Discount"
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
          <View style={{marginHorizontal: 7.5}} />
          <View style={{flex: 1}}>
            <TextInput
              placeholderTextColor={COLORS.BLACK}
              placeholder="Discount%"
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.btnTxt}>Request product</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
