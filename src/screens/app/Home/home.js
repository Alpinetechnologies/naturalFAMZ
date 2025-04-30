import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './style';
import {ICONS} from '../../../constants/icons';
import {COLORS} from '../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeProductCard from '../../../components/home-product-card';

export default function Home(props) {
  const storemanagement = [
    {
      image: 'list',
      servicename: 'Product List',
      screen: 'ProductLising',
    },
    {
      image: 'add-circle',
      servicename: 'Add Products',
      screen: 'Categories',
    },
    {
      image: 'information-circle-sharp',
      servicename: 'issue',
      screen: 'StorePerformance',
    },
    {
      image: 'add-circle',
      servicename: 'Orders',
      screen: 'OrderTopTabs',
    },
  ];

  const box = [{}, {}, {}, {}, {}];

  const productlist = [{}, {}, {}, {}];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.heading}>Quick Actions</Text>

          <View style={styles.flexWrap}>
            {storemanagement.map((item, i) => (
              <TouchableOpacity
                style={styles.cardcontainer}
                key={i}
                onPress={() => props.navigation.navigate(item.screen)}>
                <View style={styles.card2}>
                  <Ionicons name={item.image} color={COLORS.WHITE} size={22} />
                </View>
                <Text style={[styles.title, {color: 'black'}]}>
                  {item.servicename}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.count}>12</Text>
            <Text style={styles.counttitle}>Product Added{'\n'}Today</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.count}>511</Text>
            <Text style={styles.counttitle}>Customers Order{'\n'}Today</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.count}>8</Text>
            <Text style={styles.counttitle}>Issues Pending</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.count}>4</Text>
            <Text style={styles.counttitle}>Issues In Progress</Text>
          </View>
        </View>
        <View style={[styles.card, styles.fullWidth]}>
          <Text style={styles.count}>27</Text>
          <Text style={styles.counttitle}>Orders Delivered today</Text>
        </View>

        <View>
          <Text style={styles.heading}>Product List</Text>

          {productlist.map((data, j) => (
            <HomeProductCard key={j} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
