import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/colors';
import HomeProductCard from '../../../../components/home-product-card';

export default function ProductLising() {
  const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <ScrollView>
      <View style={styles.container}>
        {list.map((data, i) => (
          <HomeProductCard key={i} />
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
