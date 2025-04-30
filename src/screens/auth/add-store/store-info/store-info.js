import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import InputBox from '../../../../components/input-box';
import LabelDropdown from '../../../../components/label-dropdown';
import CustomBtn from '../../../../components/custom-btn';
import ToastAlertMsg from '../../../../components/toast-alert-msg';
// import API from '../../../../actions/api';
import ActivityLoader from '../../../../components/activity-loader';
import LabelTextarea from '../../../../components/label-textarea';
import DateTimePicker from '@react-native-community/datetimepicker';
import {COLORS} from '../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

export default function StoreInfo(props) {
  const {fullName, phoneNo, emailId} = props.route.params;

  console.log('Company Infi', fullName, phoneNo, emailId);

  const [companyName, setCompanyName] = useState(null);
  const [pan, setPan] = useState(null);
  const [regAddress, setRegAddress] = useState(null);
  const [businessEmail, setBusinessEmail] = useState(null);
  const [about, setAbout] = useState(null);
  const [pickupLocation, setPickupLocation] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [validity, setValidity] = useState(null);
  const [busines, setBusiness] = useState(null);
  const [company, setCompany] = useState(null);
  const [fassaiReg, setFassaiReg] = useState(null);
  //const [subCategory, setSubCategory] = useState(null);
  const businessType = [
    {name: 'Retail', id: 1},
    {name: 'Service', id: 2},
    {name: 'Manufacturing', id: 3},
    {name: 'Producer', id: 4},
    {name: 'Farmer', id: 5},
    {name: 'Processor', id: 6},
    {name: 'Distributor', id: 7},
    {name: 'Other', id: 7},
  ];

  const companyType = [
    {name: 'Private Limited Company', id: 1},
    {name: 'SerPublic Limited Companyvice', id: 2},
    {name: 'LLP', id: 3},
    {name: 'Partnership Firm', id: 4},
    {name: 'Sole Proprietorship', id: 5},
    {name: "Society, Farmer's Producers Organisation", id: 6},
    {name: 'Trust', id: 7},
    {name: 'Section-8', id: 7},
  ];

  const registrationType = [
    {name: 'State', id: 1},
    {name: 'Central', id: 2},
  ];

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    let date_format = moment(currentDate).format('DD-MM-YYYY');
    setDate(currentDate);
    if (event.type === 'set') setValidity(date_format);
    //else setCheckInDate(null);
  };

  const onSubmit = async () => {
    try {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

      if (companyName && companyName.toString().trim().length > 0) {
        if (pan && pan.toString().trim().length > 0) {
          if (busines && busines.toString().trim().length > 0) {
            if (company && company.toString().trim().length > 0) {
              if (regAddress && regAddress.toString().trim().length > 0) {
                if (
                  businessEmail &&
                  businessEmail.toString().trim().length > 0
                ) {
                  if (
                    pickupLocation &&
                    pickupLocation.toString().trim().length > 0
                  ) {
                    if (fassaiReg && fassaiReg.toString().trim().length > 0) {
                      if (
                        registrationNumber &&
                        registrationNumber.toString().trim().length > 0
                      ) {
                        if (validity && validity.toString().trim().length > 0) {
                          props.navigation.navigate('StoreImage', {
                            fullName,
                            phoneNo,
                            emailId,
                            companyName,
                            pan,
                            busines,
                            company,
                            regAddress,
                            businessEmail,
                            // about,
                            pickupLocation,
                            fassaiReg,
                            registrationNumber,
                            validity,
                          });
                        } else {
                          ToastAlertMsg('Please Select Validity');
                        }
                      } else {
                        ToastAlertMsg('Please Enter Registration Number');
                      }
                    } else {
                      ToastAlertMsg('Please Select Registration Type');
                    }
                  } else {
                    ToastAlertMsg('Please Enter Your Pickup Location');
                  }
                } else {
                  ToastAlertMsg('Please Enter Business Email');
                }
              } else {
                ToastAlertMsg('Please Enter Registered Address');
              }
            } else {
              ToastAlertMsg('Please Select Company Type');
            }
          } else {
            ToastAlertMsg('Please Select Business Type');
          }
        } else {
          ToastAlertMsg('Please Enter PAN Number');
        }
      } else {
        ToastAlertMsg('Please Enter Your Company Name');
      }
    } catch (error) {
      console.log(error);
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
          <Text style={styles.heading}>Tells us about your business</Text>

          <InputBox
            placeholder="Company Name"
            defaultValue={companyName}
            onChangeText={text => setCompanyName(text)}
          />

          <LabelDropdown
            title="Business Type"
            items={businessType.map(n => ({
              label: n.name,
              value: n.name,
            }))}
            defaultValue={busines}
            onChangeItem={item => setBusiness(item.value)}
          />

          <LabelDropdown
            title="Company Type"
            items={companyType.map(n => ({
              label: n.name,
              value: n.name,
            }))}
            defaultValue={company}
            onChangeItem={item => setCompany(item.value)}
          />

          <InputBox
            placeholder="Pan of Company"
            defaultValue={pan}
            onChangeText={text => setPan(text)}
          />

          <InputBox
            placeholder="Registered Address"
            defaultValue={regAddress}
            onChangeText={text => setRegAddress(text)}
          />

          <InputBox
            placeholder="Business Email*"
            defaultValue={businessEmail}
            onChangeText={text => setBusinessEmail(text)}
            //  editable={false}
          />

          {/*<LabelTextarea
            placeholder="About*"
            defaultValue={about}
            onChangeText={text => setAbout(text)}
          /> */}

          <InputBox
            placeholder="Pickup Location*"
            defaultValue={pickupLocation}
            onChangeText={text => setPickupLocation(text)}
          />

          {/* <LabelDropdown
            items={[
              {label: 'Fashion', value: '0'},
              {label: 'Store', value: '1'},
            ]}
            label="Company Type"
            defaultValue={companyType}
            onChangeItem={item => {
              //console.log(item);
              setCompanyType(item.value);
            }}
          /> */}

          {/*  <InputBox
            placeholder="Contact No. Company*"
            // defaultValue={phoneNo}
            //  onChangeText={text => setPhoneNo(text)}
            //  editable={false}
          />

          <InputBox
            placeholder="Shipping Address*"
            // defaultValue={shippingAddress}
            // onChangeText={text => setShippingAddress(text)}
          />

          <InputBox
            placeholder="Address/Map Link*"
            //  defaultValue={mapLink}
            // onChangeText={text => setMapLink(text)}
          /> */}
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.heading}>FSSAI Details</Text>

          <LabelDropdown
            title="FSSAI Registration Type"
            items={registrationType.map(n => ({
              label: n.name,
              value: n.name,
            }))}
            defaultValue={fassaiReg}
            onChangeItem={item => setFassaiReg(item.value)}
          />

          <InputBox
            placeholder="Registration Number"
            defaultValue={registrationNumber}
            onChangeText={text => setRegistrationNumber(text)}
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
              {validity
                ? validity
                : 'Validity of FSSAI Registration Certificate'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{padding: 15}}>
        <CustomBtn
          title="Continue"
          //  onPress={() => props.navigation.navigate('StoreImage')}
          onPress={() => onSubmit()}
        />
      </View>
    </View>
  );
}
