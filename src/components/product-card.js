import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');
export default function ProductCard({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.cardcontainer}
      onPress={() => navigation.navigate('ProductSubCategory')}>
      <View style={style.card}>
        <Image source={{uri: item.image}} style={{height: 68, width: 51}} />
      </View>
      <Text style={style.title}>{item.productname}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  cardcontainer: {
    width: width / 4 - 10.5,
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  card: {
    // height: 60,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 2.5,
    // overflow: 'hidden',
  },

  title: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.BLACK,
    textAlign: 'center',

    //  margin: 5,
  },
});
