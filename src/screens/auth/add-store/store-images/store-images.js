import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ToastAlertMsg from '../../../../components/toast-alert-msg';
import CustomBtn from '../../../../components/custom-btn';
import ImageMediaSelectModal from '../../../../components/image-media-select-modal';
import LabelPickerBox from '../../../../components/label-picker-box';
import DateTimePicker from '@react-native-community/datetimepicker';
import LabelDropdown from '../../../../components/label-dropdown';

import {COLORS} from '../../../../constants/colors';
import {setUploadImageToServer} from '../../../../actions/upload-image-to-server';

export default function StoreImage(props) {
  const {
    fullName,
    phoneNo,
    emailId,
    companyName,
    pan,
    busines,
    company,
    regAddress,
    businessEmail,
    pickupLocation,
    fassaiReg,
    registrationNumber,
    validity,
  } = props.route.params;

  const [modalShow, setModalShow] = useState(false);
  const [logo, setLogo] = useState(null);
  const [organicCertificate, setOrganicCertificate] = useState(null);
  const [fassaiCertificate, setFassaiCertificate] = useState(null);
  const [signature, setSignature] = useState(null);
  const [currentImageType, setCurrentImageType] = useState(null);
  const [orgcetificateType, setOrgCertificateType] = useState(null);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [organicvalidity, setOrganicValidity] = useState(null);

  const certificateType = [
    {name: 'NPOP Certificate', id: 1},
    {name: 'PGS-India Certificate', id: 2},
  ];

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_format = moment(currentDate).format('DD-MM-YYYY');
    setDate(currentDate);
    if (event.type === 'set') setOrganicValidity(date_format);
  };

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      if (
        granted[PermissionsAndroid.PERMISSIONS.CAMERA] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera permission granted.');
      } else {
        console.log('Camera permission denied.');
      }
    } catch (err) {
      console.warn('Error requesting camera permission:', err);
    }
  }

  async function uploadImagesToServer(image) {
    try {
      const json = await setUploadImageToServer(image);
      if (json.error) {
        ToastAlertMsg(json.message);
      } else {
        const imageWithId = {
          id: json.id, // from backend
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        };
        console.log('id', imageWithId.id);
        switch (currentImageType) {
          case 'logo':
            setLogo(imageWithId);
            break;
          case 'organicCertificate':
            setOrganicCertificate(imageWithId);
            break;
          case 'fassaiCertificate':
            setFassaiCertificate(imageWithId);
            break;
          case 'signature':
            setSignature(imageWithId);
            break;
          default:
            console.warn('Unknown image type');
        }
      }

      console.log('Upload result:', json);
    } catch (error) {
      console.log(error);
    }
  }

  async function selectImage() {
    try {
      launchImageLibrary({}, res => {
        if (!res.didCancel && !res.errorCode) {
          const selectedImage = res.assets[0];
          uploadImagesToServer(selectedImage);
        } else if (res.errorCode) {
          console.log('Image Picker Error:', res.errorMessage);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function openCamera() {
    try {
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
          const image = res.assets[0];
          uploadImagesToServer(image);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async () => {
    try {
      if (logo) {
        if (organicCertificate) {
          if (fassaiCertificate) {
            props.navigation.navigate('BankGstDetail', {
              fullName,
              phoneNo,
              emailId,
              companyName,
              pan,
              busines,
              company,
              regAddress,
              businessEmail,
              pickupLocation,
              fassaiReg,
              registrationNumber,
              validity,
              logoId: logo?.id,
              organicCertificateId: organicCertificate?.id,
              fassaiCertificateId: fassaiCertificate?.id,
              signatureId: signature?.id,
              orgcetificateType,
              organicvalidity,
            });
          } else {
            ToastAlertMsg('Please Upload FASSAI Certificate');
          }
        } else {
          ToastAlertMsg('Please Upload Organic Certificate');
        }
      } else {
        ToastAlertMsg('Please Upload Logo');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.bg}>
            <LabelPickerBox
              label={'Upload Logo of the Company'}
              image={logo}
              onCancel={() => setLogo(null)}
              onSelectFile={() => {
                setModalShow(true);
                setCurrentImageType('logo');
              }}
            />
          </View>

          <View style={styles.bg}>
            <LabelDropdown
              title="Organic Certificate Type"
              items={certificateType.map(n => ({
                label: n.name,
                value: n.name,
              }))}
              defaultValue={orgcetificateType}
              onChangeItem={item => setOrgCertificateType(item.value)}
            />

            <LabelPickerBox
              label={'Upload Certificate'}
              image={organicCertificate}
              onCancel={() => setOrganicCertificate(null)}
              onSelectFile={() => {
                setModalShow(true);
                setCurrentImageType('organicCertificate');
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
              <Ionicons
                name="calendar-outline"
                size={22}
                color={COLORS.PRIMARY}
              />
              <Text style={styles.date}>
                {organicvalidity ? organicvalidity : 'Certificate Validity'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bg}>
            <LabelPickerBox
              label={'Upload Fassai Certificate'}
              image={fassaiCertificate}
              onCancel={() => setFassaiCertificate(null)}
              onSelectFile={() => {
                setModalShow(true);
                setCurrentImageType('fassaiCertificate');
              }}
            />
          </View>

          <View style={styles.bg}>
            <LabelPickerBox
              label={'Upload Signature'}
              image={signature}
              onCancel={() => setSignature(null)}
              onSelectFile={() => {
                setModalShow(true);
                setCurrentImageType('signature');
              }}
            />
          </View>

          <ImageMediaSelectModal
            onSkip={() => setModalShow(false)}
            visible={modalShow}
            onOpenCamera={() => openCamera()}
            onOpenImagePicker={() => selectImage()}
          />
        </View>
      </ScrollView>

      <View style={{marginHorizontal: 15}}>
        <CustomBtn title="Continue" marginVertical={20} onPress={onSubmit} />
      </View>
    </View>
  );
}
