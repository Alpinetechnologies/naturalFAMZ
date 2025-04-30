import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';

export default function HomeProductCard() {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://5.imimg.com/data5/SELLER/Default/2024/3/405159448/KF/GF/JK/81680101/1-kg-rs-2-per-pcs.png',
          }}
          style={styles.productimg}
        />
      </View>
      <View>
        <Text style={styles.brandname}>Natural Farmz Organic</Text>
        <Text style={styles.itemname}>Chana Dal</Text>
        <Text style={styles.salerate}>
          ₹120/-{' '}
          <Text style={{...styles.salerate, color: COLORS.RED}}>MRP-150/-</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: 60,
    width: 50,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    backgroundColor: COLORS.WHITE,
    marginRight: 10,
  },
  productimg: {
    width: 40,
    height: 50,
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.EXTRALIGHT_GREY,
  },
  brandname: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  itemname: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  salerate: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
});
