import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../../constants/colors';
import {ICONS} from '../../../../constants/icons';
import {FONT_FAMILY} from '../../../../constants/font-family';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Label(props) {
  const labels = [
    {title: 'Add product', icon: 'add-circle', screen: 'Categories'},

    {title: 'My product list', icon: 'add-circle', screen: 'ProductList'},
  ];

  return (
    <View style={styles.container}>
      {labels.map((data, i) => (
        <TouchableOpacity
          style={styles.flexRow}
          key={i}
          onPress={() => props.navigation.navigate(data.screen)}>
          <View style={styles.card2}>
            <Ionicons name={data.image} color={COLORS.WHITE} size={22} />
          </View>
          <Text style={styles.label}>{data.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  label: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  icon: {height: 20, width: 20, marginRight: 15},
});
