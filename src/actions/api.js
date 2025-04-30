import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  makeDeleteRequest,
  makeGetRequest,
  makePatchRequest,
  makePostRequest,
} from './apiService';
import {BASE_URL} from '../constants/base-url';

const API = {
  async setLoginData(email, password) {
    try {
      const data = await makePostRequest(BASE_URL + '/api/vendor/login', {
        email: email,
        password: password,
      });

      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  },

  // async setSignUpData(
  //   ownerName,
  //   ownerPhone,
  //   ownerEmail,
  //   companyName,
  //   companyPAN,
  //   businessType,
  //   companyType,
  //   registeredAddress,
  //   businessEmail,
  //   aboutCompany,
  //   companyLogo,
  //   organicCertificate,
  //   certificateValidity,
  //   signature,
  //   pickupLocation,
  //   fssaiType,
  //   fssaiCertificate,
  //   fssaiNumber,
  //   fssaiValidity,
  //   bankName,
  //   accountNumber,
  //   ifscCode,
  //   branchAddress,
  //   gstin,
  //   gstAddress,
  //   gstState,
  // ) {
  //   try {
  //     const myHeaders = new Headers();
  //     myHeaders.append('Content-Type', 'application/json');

  //     const raw = JSON.stringify({
  //       ownerName: ownerName,
  //       ownerPhone: ownerPhone,
  //       ownerEmail: ownerEmail,
  //       companyName: companyName,
  //       companyPAN: companyPAN,
  //       businessType: businessType,
  //       companyType: companyType,
  //       registeredAddress: registeredAddress,
  //       businessEmail: businessEmail,
  //       aboutCompany: aboutCompany,
  //       companyLogo: companyLogo,
  //       organicCertificate: organicCertificate,
  //       signature: signature,
  //       certificateValidity: certificateValidity,
  //       pickupLocation: pickupLocation,
  //       fssaiType: fssaiType,
  //       fssaiCertificate: fssaiCertificate,
  //       fssaiNumber: fssaiNumber,
  //       fssaiValidity: fssaiValidity,
  //       bankName: bankName,
  //       accountNumber: accountNumber,
  //       ifscCode: ifscCode,
  //       branchAddress: branchAddress,
  //       gstin: gstin,
  //       gstAddress: gstAddress,
  //       gstState: gstState,
  //     });

  //     const requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: raw,
  //       redirect: 'follow',
  //     };

  //     fetch(
  //       'https://multi-vendor-jul2.onrender.com/api/v1/vendor',
  //       requestOptions,
  //     )
  //       .then(response => response.text())
  //       .then(result => console.log(result))
  //       .catch(error => console.error(error));
  //   } catch (error) {
  //     return error.response;
  //   }
  // },

  async setSignUpData(
    ownerName,
    ownerPhone,
    ownerEmail,
    companyName,
    companyPAN,
    businessType,
    companyType,
    registeredAddress,
    businessEmail,
    aboutCompany,
    companyLogo,
    organicCertificate,
    certificateValidity,
    signature,
    pickupLocation,
    fssaiType,
    fssaiCertificate,
    fssaiNumber,
    fssaiValidity,
    bankName,
    accountNumber,
    ifscCode,
    branchAddress,
    gstin,
    gstAddress,
    gstState,
  ) {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        ownerName,
        ownerPhone,
        ownerEmail,
        companyName,
        companyPAN,
        businessType,
        companyType,
        registeredAddress,
        businessEmail,
        aboutCompany,
        companyLogo,
        organicCertificate,
        signature,
        certificateValidity,
        pickupLocation,
        fssaiType,
        fssaiCertificate,
        fssaiNumber,
        fssaiValidity,
        bankName,
        accountNumber,
        ifscCode,
        branchAddress,
        gstin,
        gstAddress,
        gstState,
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://multi-vendor-jul2.onrender.com/api/v1/vendor',
        requestOptions,
      );

      const json = await response.json(); // 👈 Parse response to JSON
      return json; // 👈 Return the parsed object
    } catch (error) {
      console.error('API error:', error);
      return {success: false, message: error.message};
    }
  },

  async getPartnerProfile() {
    try {
      let userId = await AsyncStorage.getItem('userId');
      const data = await makeGetRequest(`${BASE_URL}/api/vendor/get/${userId}`);

      if (data) {
        return data;
      }
    } catch (error) {
      return error.response;
    }
  },
};

export default API;
