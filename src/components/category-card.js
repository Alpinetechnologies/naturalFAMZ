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
import API from '../actions/api';
const {width} = Dimensions.get('window');
export default function CategoryCard({item}) {
  const navigation = useNavigation();
const[imageUrl, setImageUrl]=React.useState(null);

const getImages = () => {
  if (item.image) {
    const url = `https://multi-vendor-jul2.onrender.com/api/v1/image/${item.image}`;
    setImageUrl(url);
  } else {
    setImageUrl('https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg');
  }
};
  React.useEffect(() => {
    getImages();
  }, [item.image]);
  return (
    <TouchableOpacity
      style={style.cardcontainer}
      onPress={() => navigation.navigate('ProductSubCategory')}>
      <View style={style.card}>
        <Image source={{uri: imageUrl}} style={{height: 68, width: 51}} />
      </View>
      <Text style={style.title}>{item.name}</Text>
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
