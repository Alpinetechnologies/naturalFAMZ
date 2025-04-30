import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import styles from './style';

// import {useIsFocused} from '@react-navigation/native';
// import API from '../../../../actions/api';
// import ActivityLoader from '../../../../components/activity-loader';
import AllProductCard from '../../../../components/all-product-card';
import FloatingBtn from '../../../../components/floating-btn';
// import NoRecords from '../../../../components/no-records';
// import ToastAlertMsg from '../../../../components/toast-alert-msg';
// import {AuthContext} from '../../../../../auth-context';

export default function ProductsList(props) {
  const [items, setItems] = useState([{}, {}, {}, {}]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.rowWrap}>
          {items.map((data, i) => (
            <AllProductCard key={i} item={data} />
          ))}
        </View>
      </ScrollView>
      <FloatingBtn
        title="Add Product"
        onPress={() => props.navigation.navigate('AddProduct')}
      />
    </View>
  );
}
