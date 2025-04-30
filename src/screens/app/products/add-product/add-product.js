import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import LabelInputBox from '../../../../components/label-input-box';
import LabelDropdown from '../../../../components/label-dropdown';
import CustomBtn from '../../../../components/custom-btn';
import ImageMediaSelectModal from '../../../../components/image-media-select-modal';
import LabelPickerBox from '../../../../components/label-picker-box';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {COLORS} from '../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

export default function AddProduct() {
  const [productName, setProductName] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [dimension, setDimension] = useState(null);
  const [weight, setWeight] = useState(null);
  const [integredients, setIntegredients] = useState(null);
  const [hsnNumber, setHsnNumber] = useState(null);
  const [gstRate, setGSTRate] = useState(null);
  const [metaTag, setMetaTag] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const [title, setTitle] = useState(null);
  const [qty, setQty] = useState(null);
  const [delivery, setDelivery] = useState(null);
  const [perishable, setPerishable] = useState(null);

  const deliveryType = [
    {name: 'Local', id: 1},
    {name: 'Selected State', id: 2},
    {name: 'PAN India', id: 3},
  ];

  const periType = [
    {name: 'Perishable', id: 1},
    {name: 'Non Perishable', id: 2},
  ];

  const [modalShow, setModalShow] = useState(false);
  const [logo, setLogo] = useState(null);
  const [organicCertificate, setOrganicCertificate] = useState(null);
  const [fassaiCertificate, setFassaiCertificate] = useState(null);

  const [currentImageType, setCurrentImageType] = useState(null);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [organicvalidity, setOrganicValidity] = useState(null);

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_format = moment(currentDate).format('YYYY-MM-YY');
    setDate(currentDate);
    if (event.type === 'set') setOrganicValidity(date_format);
    //else setCheckInDate(null);
  };

  async function selectImage() {
    try {
      launchImageLibrary({}, res => {
        if (!res.didCancel && !res.errorCode) {
          const selectedImage = res.assets[0];
          console.log(selectedImage);

          if (currentImageType === 'logo') {
            setLogo(selectedImage);
          } else if (currentImageType === 'organicCertificate') {
            setOrganicCertificate(selectedImage);
          } else if (currentImageType === 'fassaiCertificate') {
            setFassaiCertificate(selectedImage);
          } else if (currentImageType === 'signature') {
            setSignature(selectedImage);
          }
        } else if (res.errorCode) {
          console.log('Image Picker Error:', res.errorMessage);
        }
      });
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  }

  // console.log('type ' + currentImageType);

  async function openCamera() {
    const options = {
      mediaType: 'photo',
      includeExtra: true,
    };

    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User cancelled camera picker');
      } else if (res.errorCode) {
        console.log('Camera picker error:', res.errorMessage);
      } else {
        const capturedImage = res.assets[0];
        console.log(capturedImage);

        if (currentImageType === 'logo') {
          setLogo(capturedImage);
        } else if (currentImageType === 'organicCertificate') {
          setOrganicCertificate(capturedImage);
        } else if (currentImageType === 'fassaiCertificate') {
          setFassaiCertificate(capturedImage);
        } else if (currentImageType === 'signature') {
          setSignature(capturedImage);
        }
      }
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LabelInputBox placeholder="Name of Product" label="Name of Product" />

        <LabelInputBox
          placeholder="Product Description"
          label="Product Description"
        />

        <LabelInputBox placeholder="Integredients" label="Integredients" />

        <LabelInputBox placeholder="HSN Code" label="HSN Code" />

        <LabelInputBox placeholder="GST Rate" label="GST Rate" />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <LabelInputBox placeholder="Meta Tag" label="Meta Tag" />
          </View>

          <View style={{flex: 1, marginHorizontal: 2.5}}>
            <LabelInputBox placeholder="Meta Keyword" label="Meta Keyword" />
          </View>

          <View style={{flex: 1}}>
            <LabelInputBox placeholder="Meta Title" label="Meta Title" />
          </View>
        </View>

        <LabelInputBox
          placeholder="Quantity"
          label="Quantity"
          keyboardType="number-pad"
        />

        <LabelDropdown
          label="Delivery Details"
          title="Delivery Details"
          items={deliveryType.map(n => ({
            label: n.name,
            value: n.name,
          }))}
          defaultValue={delivery}
          onChangeItem={item => setDelivery(item.value)}
        />

        <LabelDropdown
          label="Perishable"
          title="Perishable"
          items={periType.map(n => ({
            label: n.name,
            value: n.name,
          }))}
          defaultValue={perishable}
          onChangeItem={item => setPerishable(item.value)}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <LabelInputBox
              placeholder="Length"
              label="Product Length"
              keyboardType="number-pad"
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 2.5}}>
            <LabelInputBox
              placeholder="Breadth"
              label="Product Breadth"
              keyboardType="number-pad"
            />
          </View>
          <View style={{flex: 1}}>
            <LabelInputBox
              placeholder="Height"
              label="Product Height"
              keyboardType="number-pad"
            />
          </View>
        </View>

        <LabelInputBox placeholder="Product Weight" label="Product Weight" />

        <LabelPickerBox
          label={'Upload Organic Product Certificate'}
          image={organicCertificate}
          onCancel={() => setOrganicCertificate(null)}
          onSelectFile={() => {
            setModalShow(true), setCurrentImageType('organicCertificate');
          }}
        />

        {show && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}
        <TouchableOpacity
          style={styles.datesContainer}
          onPress={() => setShow(true)}>
          <Ionicons name="calendar-outline" size={22} color={COLORS.PRIMARY} />

          <Text style={styles.date}>
            {organicvalidity ? organicvalidity : 'Certificate Validity'}
          </Text>
        </TouchableOpacity>

        <LabelPickerBox
          label={'Upload Fassai Certificate'}
          image={fassaiCertificate}
          onCancel={() => setFassaiCertificate(null)}
          onSelectFile={() => {
            setModalShow(true), setCurrentImageType('fassaiCertificate');
          }}
        />

        <CustomBtn title="Add" marginVertical={20} />
      </ScrollView>
      <ImageMediaSelectModal
        onSkip={() => setModalShow(false)}
        visible={modalShow}
        onOpenCamera={() => openCamera()}
        onOpenImagePicker={() => selectImage()}
      />
    </View>
  );
}
