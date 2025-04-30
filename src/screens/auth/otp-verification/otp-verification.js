import React, {useEffect, useContext, useState} from 'react';
import {View, TouchableOpacity, Text, Image, StatusBar} from 'react-native';
import styles from './style';
import {IMAGES} from '../../../constants/images';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomBtn from '../../../components/custom-btn';
import API from '../../../actions/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActivityLoader from '../../../components/activity-loader';
import {AuthContext} from '../../../../auth-context';

export default function OtpVerification(props) {
  const {signIn} = useContext(AuthContext).authContext;
  const phoneNo = props.route.params;
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const user_status = '1';

  const ToastAlertMsg = msg => {
    ToastAndroid.show(msg, ToastAndroid.SHORT); // Replace with your custom alert if needed
  };

  const onSubmit = async () => {
    if (!otp) {
      ToastAlertMsg('Please Enter OTP');
      return;
    }

    setIsLoading(true);

    if (user_status === '1') {
      try {
        // Simulate API call delay
        setTimeout(async () => {
          await AsyncStorage.setItem('userId', 'userId');
          await AsyncStorage.setItem('accessToken', 'accessToken');
          signIn({token: 'accessToken', id: 'userId'});
          setIsLoading(false);
        }, 4000);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else {
      ToastAlertMsg('Invalid OTP, Please insert again.');
      setIsLoading(false);
    }
  };
  const resendOtp = async () => {
    try {
      const data = await API.setLoginData(phoneNo);

      if (data.success) {
        ToastAlertMsg('New OTP has been sent successfully.');
        setTimer(false);
        setSeconds(30);
      } else {
        ToastAlertMsg('Something went wrong ..!');
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
      setTimer(true);
    }
  }, [seconds]);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />

      <View style={styles.container}>
        {isLoading && <ActivityLoader isLoading={isLoading} />}
        <View>
          <Image source={IMAGES.LOGO} style={styles.logo} />

          <Text style={styles.heading}>OTP Verification</Text>
          <Text style={styles.title}>
            Enter the OTP verification code from the phone we just sent you in
            +91 {phoneNo}
          </Text>
          <OTPInputView
            style={styles.otpInput}
            pinCount={4}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => setOtp(code)}
            autoFocusOnLoad={false}
          />
          <CustomBtn
            title="Verify"
            marginVertical={40}
            onPress={() => onSubmit()}
          />
        </View>

        {timer ? (
          <TouchableOpacity onPress={() => resendOtp()}>
            <Text style={styles.resendCode}>Resend Code ?</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.resendCode}>
            Resend Code in 00:
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        )}
      </View>
    </>
  );
}
