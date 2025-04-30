import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import SearchInput from '../../../../components/search-input';
import {COLORS} from '../../../../constants/colors';

export default function ProductSubCategory(props) {
  const list = [{}, {}, {}];

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.searchContainer}>
        <SearchInput title="Search" />
      </View>
      {list.map((data, i) => (
        <TouchableOpacity
          style={{
            padding: 12.5,
            borderBottomWidth: 1,
            borderColor: COLORS.LIGHT_GREY,
            marginBottom: 2.5,
          }}
          key={i}
          onPress={() => props.navigation.navigate('AddProduct')}>
          <View style={styles.catContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.name}>Vijay gold atta</Text>
              <Text style={styles.desc}>
                Lorem ipsum dolar is just a dummy text
              </Text>
            </View>
            <View style={styles.imagecard}>
              <Image
                source={{
                  uri: 'https://www.vijayfoods.com/wp-content/uploads/2022/04/Bombay-Sooji.png',
                }}
                style={{height: 57, width: 42}}
              />
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.btnTxt}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
