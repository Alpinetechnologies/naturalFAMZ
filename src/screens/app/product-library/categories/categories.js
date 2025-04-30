import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import styles from './style';
import SearchInput from '../../../../components/search-input';
import {COLORS} from '../../../../constants/colors';
import ProductCard from '../../../../components/home-product-card';
import CategoryCard from '../../../../components/category-card';

export default function Categories() {
  const producrlist = [
    {
      image:
        'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
      productname: 'Atta /Flour',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
      productname: 'Masala and Snacks',
    },
    {
      image:
        'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
      productname: 'Atta /Flour',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
      productname: 'Masala and Snacks',
    },
    {
      image:
        'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
      productname: 'Atta /Flour',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
      productname: 'Masala and Snacks',
    },
    {
      image:
        'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
      productname: 'Atta /Flour',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
      productname: 'Masala and Snacks',
    },
    {
      image:
        'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
      productname: 'Atta /Flour',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
      productname: 'Masala and Snacks',
    },
    {
      image:
        'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
      productname: 'Atta /Flour',
    },
    {
      image:
        'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
      productname: 'Rice,Oils',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
      productname: 'Masala and Snacks',
    },
    {
      image:
        'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
      productname: 'Rice,Oils',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={styles.searchContainer}>
        <SearchInput />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.heading}>Categories</Text>
          <View
            style={{
              flex: 0.95,
              borderWidth: 0.5,
              borderColor: COLORS.PRIMARY,
            }}></View>
        </View>
        <View style={styles.flexWrap}>
          {producrlist.map((data, i) => (
            <CategoryCard key={i} item={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
