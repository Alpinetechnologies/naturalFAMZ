import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import InputBox from '../../../../components/input-box';
import {launchImageLibrary} from 'react-native-image-picker';
import {COLORS} from '../../../../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import CustomBlueBtn from '../../../../components/custom-blue-btn';

export default function CreateNewCategory(props) {
  const [image, setImage] = useState(null);

  async function selectImage() {
    try {
      launchImageLibrary({})
        .then(image => {
          console.log(image.assets[0]);
          setImage(image.assets[0]);
        })
        .catch(e => console.log(e));
    } catch (error) {
      console.log(error);
    }
  }

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
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a category</Text>
      <View style={styles.flexWrap}>
        {producrlist.map((data, i) => (
          <TouchableOpacity
            style={styles.cardcontainer}
            key={i}
            onPress={() => props.navigation.navigate('RequestProduct')}>
            <View style={styles.card}>
              <Image
                source={{uri: data.image}}
                style={{height: 68, width: 48}}
              />
            </View>
            <Text style={styles.title}>{data.productname}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <InputBox placeholder="Enter category name" label="Create category" />

      <View style={{marginVertical: 10}}>
        <Text style={styles.label}>Upload Image</Text>
        <View style={styles.uploadBtn}>
          {image ? (
            <>
              <Text style={styles.fileName} numberOfLines={1}>
                {image.fileName}
              </Text>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => setImage(null)}>
                <Feather name="x" size={12} color={COLORS.WHITE} />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.selectContainer}
              onPress={() => selectImage()}>
              <Text style={styles.select}>Select Image</Text>
            </TouchableOpacity>
          )}
        </View>
        {image && <Image style={styles.image} source={{uri: image.uri}} />}
      </View>

      <CustomBlueBtn title="Create category" marginVertical={40} />
    </View>
  );
}
