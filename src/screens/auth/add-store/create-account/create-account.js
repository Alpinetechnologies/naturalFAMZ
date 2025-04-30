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
import Modal from 'react-native-modal';
import {ICONS} from '../../../../constants/icons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import ToastAlertMsg from '../../../../components/toast-alert-msg';
import ActivityLoader from '../../../../components/activity-loader';

import LabelDropdown from '../../../../components/label-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../../constants/colors';
import {IMAGES} from '../../../../constants/images';

export default function CreateAccount(props) {
  const [phoneNo, setPhoneNo] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [emailId, setEmailId] = useState(null);

  const onSubmit = async () => {
    try {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (fullName && fullName.toString().trim().length > 0) {
        if (phoneNo && phoneNo.toString().trim().length > 0) {
          if (reg.test(emailId)) {
            props.navigation.navigate('StoreInfo', {
              //phoneNo:props.route.params?.phoneNumber,
              fullName,
              phoneNo,
              emailId,
            });
          } else {
            ToastAlertMsg('Please Enter Valid Email Id');
          }
        } else {
          ToastAlertMsg('Please Enter 10 digit phone Number');
        }
      } else {
        ToastAlertMsg('Please Enter Owner Name');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={[COLORS.WHITE, COLORS.PRIMARY]}>
      {/* <Text style={styles.heading}>Add your Personal Details</Text> */}

      <View
        style={{
          backgroundColor: COLORS.PRIMARY,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          paddingTop: 60,
        }}>
        <Image
          source={IMAGES.LOGO}
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            marginBottom: 20,
          }}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.mainContainer}>
          <InputBox
            placeholder="Owner Name*"
            defaultValue={fullName}
            onChangeText={text => setFullName(text)}
          />

          <InputBox
            placeholder="Your phone number"
            defaultValue={phoneNo}
            onChangeText={text => setPhoneNo(text)}
            keyboardType="number-pad"
          />

          <InputBox
            placeholder="Your email address"
            defaultValue={emailId}
            onChangeText={text => setEmailId(text)}
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text style={styles.aggrmnt}>
            By signing up, you agree to the Terms of Service and Data Processing
            Agreement
          </Text>
        </View>
        <View style={{padding: 15}}>
          <CustomBtn title="Let's Begin" onPress={() => onSubmit()} />
        </View>
      </View>
    </LinearGradient>
  );
}
