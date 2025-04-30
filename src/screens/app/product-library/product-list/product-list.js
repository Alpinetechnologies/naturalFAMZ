import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {COLORS} from '../../../../constants/colors';
import HomeProductCard from '../../../../components/home-product-card';
import API from '../../../../actions/api';
import ActivityLoader from '../../../../components/activity-loader';

export default function ProductLising() {
const [isLoading, setIsLoading] = useState(false);
const[productList, setProductList] = useState([]);


console.log('productList ============:', productList);
  const initializeData = async () => {
    try {
      setIsLoading(true);
      const data = await API.getAllProducts();
      console.log('Product List:', data);
      if (data.success === true) {
        setProductList(data.data);
      } else {
        ToastAlertMsg(data.message || 'Network failed. Please try again.');
      }
    } catch (error) {
      console.log('Product List error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initializeData();
  }
  , []);



  return (
    <ScrollView>
      {isLoading && <ActivityLoader isLoading={isLoading} />}
      <View style={styles.container}>
        {productList?.map((data, i) => (
          <HomeProductCard data={data} key={i} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
