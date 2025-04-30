import { View, Text, ScrollView, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import SearchInput from '../../../../components/search-input';
import { COLORS } from '../../../../constants/colors';
import ProductCard from '../../../../components/home-product-card';
import CategoryCard from '../../../../components/category-card';
import ActivityLoader from '../../../../components/activity-loader';
import API from '../../../../actions/api';

export default function Categories() {
  // const producrlist = [
  //   {
  //     image:
  //       'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
  //     productname: 'Atta /Flour',
  //   },
  //   {
  //     image:
  //       'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
  //     productname: 'Masala and Snacks',
  //   },
  //   {
  //     image:
  //       'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
  //     productname: 'Atta /Flour',
  //   },
  //   {
  //     image:
  //       'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
  //     productname: 'Masala and Snacks',
  //   },
  //   {
  //     image:
  //       'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
  //     productname: 'Atta /Flour',
  //   },
  //   {
  //     image:
  //       'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
  //     productname: 'Masala and Snacks',
  //   },
  //   {
  //     image:
  //       'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
  //     productname: 'Atta /Flour',
  //   },
  //   {
  //     image:
  //       'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
  //     productname: 'Masala and Snacks',
  //   },
  //   {
  //     image:
  //       'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
  //     productname: 'Atta /Flour',
  //   },
  //   {
  //     image:
  //       'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
  //     productname: 'Masala and Snacks',
  //   },
  //   {
  //     image:
  //       'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://5.imimg.com/data5/ZO/FD/KR/SELLER-13640528/bombay-sooji-500x500.jpg',
  //     productname: 'Atta /Flour',
  //   },
  //   {
  //     image:
  //       'https://m.media-amazon.com/images/I/61E6510U+pL._AC_UF1000,1000_QL80_.jpg',
  //     productname: 'Rice,Oils',
  //   },
  //   {
  //     image:
  //       'https://www.bigbasket.com/media/uploads/p/l/40161708_5-bb-royal-basmati-rice-mini-mogra-brokentukda.jpg',
  //     productname: 'Masala and Snacks',
  //   },
  //   {
  //     image:
  //       'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
  //     productname: 'Rice,Oils',
  //   },
  // ];



  const [isLoading, setIsLoading] = useState(false);
  const [categoryList, setCategorytList] = useState([]);


  console.log('categoryList ============:', categoryList);
  const initializeData = async () => {
    try {
      setIsLoading(true);
      const data = await API.getAllCategory();
      console.log('Category List:', data);
      if (data.success === true) {
        setCategorytList(data.data);
      } else {
        ToastAlertMsg(data.message || 'Network failed. Please try again.');
      }
    } catch (error) {
      console.log('Category List error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeData();
  }
    , []);


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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.heading}>Categories</Text>
          <View
            style={{
              flex: 0.95,
              borderWidth: 0.5,
              borderColor: COLORS.PRIMARY,
            }}></View>
        </View>
        <View style={styles.flexWrap}>
          {isLoading && <ActivityLoader isLoading={isLoading} />}
          {categoryList.map((data, i) => (
            <CategoryCard key={i} item={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
