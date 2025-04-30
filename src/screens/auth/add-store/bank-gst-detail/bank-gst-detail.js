import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import InputBox from '../../../../components/input-box';
import CustomBtn from '../../../../components/custom-btn';
import {AuthContext} from '../../../../../auth-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageMediaSelectModal from '../../../../components/image-media-select-modal';
import API from '../../../../actions/api';
import ToastAlertMsg from '../../../../components/toast-alert-msg';
import moment from 'moment';
import ActivityLoader from '../../../../components/activity-loader';

export default function BankGstDetail(props) {
  const {signIn} = React.useContext(AuthContext).authContext;
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
    logoId,
    orgcetificateType,
    organicCertificateId,
    organicvalidity,
    fassaiCertificateId,
    signatureId,
  } = props.route.params;

  console.log(
    'BAnk Details ',
    // fullName,
    // phoneNo,
    // emailId,
    // companyName,
    // pan,
    // busines,
    // company,
    // regAddress,
    // businessEmail,
    // pickupLocation,
    // fassaiReg,
    // registrationNumber,
    // validity,
    logoId,
    // orgcetificateType,
    organicCertificateId,
    //  organicvalidity,
    fassaiCertificateId,
    signatureId,
  );

  // const onSubmit = async () => {
  //   try {
  //     signIn({token: 'accessToken', id: 'userId'});
  //     await AsyncStorage.setItem('userId', 'userId');
  //     await AsyncStorage.setItem('accessToken', 'accessToken');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bankName, setBankName] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [ifscCode, setIfscCode] = useState(null);
  const [branchName, setBranchName] = useState(null);

  const [gstNumber, setGstNumber] = useState(null);
  const [registerAddress, setRegisterAddress] = useState(null);
  const [state, setState] = useState(null);
  const [gstCertificate, setGstCertificate] = useState(null);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [gstvalidity, setGstValidity] = useState(null);

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_format = moment(currentDate).format('YYYY-MM-YY');
    setDate(currentDate);
    if (event.type === 'set') setGstValidity(date_format);
    //else setCheckInDate(null);
  };

  async function selectImage() {
    try {
      launchImageLibrary({})
        .then(image => {
          console.log(image.assets[0]);
          setGstCertificate(image.assets[0]);
        })
        .catch(e => console.log(e));
    } catch (error) {
      console.log(error);
    }
  }

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
        const image = res.assets[0];
        console.log(image);
        setGstCertificate(image);
      }
    });
  }

  const onSubmit = async () => {
    try {
      if (bankName && bankName.toString().trim().length > 0) {
        if (accountNumber && accountNumber.toString().trim().length > 0) {
          if (ifscCode && ifscCode.toString().trim().length > 0) {
            if (branchName && branchName.toString().trim().length > 0) {
              if (gstNumber && gstNumber.toString().trim().length > 0) {
                if (
                  registerAddress &&
                  registerAddress.toString().trim().length > 0
                ) {
                  if (state && state.toString().trim().length > 0) {
                    {
                      console.log('onRegistration()');
                      onRegistration();
                    }
                  } else {
                    ToastAlertMsg('Please Enter State Name');
                  }
                } else {
                  ToastAlertMsg('Please Enter Registered Address');
                }
              } else {
                ToastAlertMsg('Please Enter GSTIN Number');
              }
            } else {
              ToastAlertMsg('Please Enter Branch Name');
            }
          } else {
            ToastAlertMsg('Please Enter IFSC Code');
          }
        } else {
          ToastAlertMsg('Please Enter Bank Account Number Number');
        }
      } else {
        ToastAlertMsg('Please Enter Your Bank Nam');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRegistration = async () => {
    try {
      setIsLoading(true);

      const data = await API.setSignUpData(
        fullName,
        phoneNo ?? '',
        emailId ?? '',
        companyName ?? '',
        pan ?? '',
        busines ?? '',
        company ?? '',
        regAddress ?? '',
        businessEmail ?? '',
        'aboutCompany',
        logoId, // or base64 if required
        organicCertificateId?.toString().trim() ?? '',
        organicvalidity ? moment(organicvalidity).format('YYYY-MM-DD') : '',
        signatureId?.toString().trim() ?? '',
        pickupLocation ?? '',
        fassaiReg ?? '',
        fassaiCertificateId?.toString().trim() ?? '',
        registrationNumber ?? '',
        validity ? moment(validity).format('YYYY-MM-DD') : '',
        bankName ?? '',
        accountNumber ?? '',
        ifscCode ?? '',
        branchName?.toString().trim() ?? '',
        gstNumber?.toString().trim() ?? '',
        registerAddress?.toString().trim() ?? '',
        state?.toString().trim() ?? '',
      );
      if (data.success === true) {
        ToastAlertMsg('Your Profile is waiting for approval');
        props.navigation.navigate('OtpLogin');
      } else {
        ToastAlertMsg(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.log('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <Text style={styles.heading}>Upload Bank details</Text>

          <InputBox
            placeholder="Enter Bank Name"
            defaultValue={bankName}
            onChangeText={text => setBankName(text)}
          />

          <InputBox
            placeholder="Enter Account Number"
            defaultValue={accountNumber}
            onChangeText={text => setAccountNumber(text)}
          />

          <InputBox
            placeholder="Enter IFSC Code"
            defaultValue={ifscCode}
            onChangeText={text => setIfscCode(text)}
          />

          <InputBox
            placeholder="Enter Branch Name"
            defaultValue={branchName}
            onChangeText={text => setBranchName(text)}
          />
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.heading}>Upload GST details</Text>

          <InputBox
            placeholder="Enter GST Number"
            defaultValue={gstNumber}
            onChangeText={text => setGstNumber(text)}
          />

          <InputBox
            placeholder="Enter Register Address"
            defaultValue={registerAddress}
            onChangeText={text => setRegisterAddress(text)}
          />

          <InputBox
            placeholder="Enter State Name"
            defaultValue={state}
            onChangeText={text => setState(text)}
          />

          {/* <LabelPickerBox
            label={'Upload GST Certificate'}
            image={gstCertificate}
            onCancel={() => setGstCertificate(null)}
            onSelectFile={() => {
              setModalShow(true);
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
              {gstvalidity ? gstvalidity : 'GST Certificate Validity'}
            </Text>
          </TouchableOpacity> */}

          <ImageMediaSelectModal
            onSkip={() => setModalShow(false)}
            visible={modalShow}
            onOpenCamera={() => openCamera()}
            onOpenImagePicker={() => selectImage()}
          />
        </View>

        <View style={{marginHorizontal: 10}}>
          <CustomBtn
            marginVertical={20}
            title="verify"
            onPress={() => onSubmit()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
