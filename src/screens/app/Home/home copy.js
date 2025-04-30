import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import ImageCarousel from '../../../components/image-carousel';

import TopProductCard from '../../../components/top-product-card';

export default function Home(props) {
  const [category, setCategory] = useState([{}, {}, {}, {}, {}]);
  return (
    <ScrollView style={styles.container}>
      <ImageCarousel
        banner={[
          {
            id: 1,
            image:
              'https://organicindia.com/cdn/shop/files/Website_banner.jpg?v=1728632366',
          },
          {
            id: 2,
            image:
              'https://organicindia.com/cdn/shop/files/Offer_Banner_creative__1920x800_ca9b2786-543a-402a-9259-bfd382b63dd8.jpg?v=1717071392',
          },
          {
            id: 3,
            image:
              'https://organicindia.com/cdn/shop/files/key_visual_web_banners2.jpg?v=1723459220',
          },
          {
            id: 4,
            image:
              'https://organicindia.com/cdn/shop/files/Clean-website-banner.jpg?v=1711618375',
          },
        ]}
      />

      <View style={styles.infoContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.heading}>Categories</Text>
          <TouchableOpacity
          //  onPress={() => props.navigation.navigate('CategoriesList', {})}
          >
            <Text style={styles.seeall}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.catContainer}>
          {category.map((data, i) => (
            <TouchableOpacity
              style={styles.box}
              key={i}
              onPress={() => props.navigation.navigate('SubCategory')}>
              <Image
                style={{height: 100}}
                source={{
                  uri: 'https://www.shutterstock.com/image-photo/farmer-girl-harvests-turniprooted-cabbage-600nw-2400029675.jpg',
                }}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Category</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{paddingHorizontal: 8}} />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.flexRow}>
          <Text style={styles.heading}>Products</Text>
          <TouchableOpacity
          //  onPress={() => props.navigation.navigate('CategoriesList', {})}
          >
            <Text style={styles.seeall}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          {category.map((data, i) => (
            <TopProductCard key={i} data={data} />
          ))}
          <View style={{paddingHorizontal: 8}} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
