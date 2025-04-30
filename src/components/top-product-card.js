import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';

import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export default function TopProductCard({data}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: 'https://keralaagriculture.gov.in/wp-content/uploads/2021/05/20c-1.jpg',
          }}
          style={styles.img}
        />
      </View>

      <View style={{padding: 10}}>
        <Text style={styles.name}>Product Name</Text>

        <Text style={styles.price}>
          200
          <Text style={styles.mrp}>300</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width / 2,
    //  height: 260,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: COLORS.EXTRALIGHT_GREY,
    marginRight: 10,
    marginVertical: 5,
    elevation: 2,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 2.5,
    marginBottom: 10,
  },

  img: {
    // borderRadius: 100,
    height: 200,
    width: width / 2,
    // width: '90%',
    //  borderRadius: 16,
    //  resizeMode: 'contain',
  },

  imgContainer: {
    alignItems: 'center',
    // marginTop: 10,
    // height: 200,
    marginBottom: 5,
  },

  rate: {
    fontSize: 12,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.PRIMARY_SEMI_BOLD,
    backgroundColor: 'green',
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 2.5,
    borderRadius: 2.5,
    //marginTop: 5,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.PRIMARY_BOLD,
    marginBottom: 10,
  },

  price: {
    fontSize: 15,
    color: COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.PRIMARY_BOLD,
  },

  mrp: {
    fontSize: 15,
    color: COLORS.RED,
    fontFamily: FONT_FAMILY.PRIMARY_SEMI_BOLD,
    textDecorationLine: 'line-through',
  },
});
