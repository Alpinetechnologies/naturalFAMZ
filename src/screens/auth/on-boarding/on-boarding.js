// import React, {useRef} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StatusBar,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import {IMAGES} from '../../../constants/images';
// import styles from './style';
// import {COLORS} from '../../../constants/colors';
// import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

// const slides = [
//   {
//     key: 1,
//     text: 'Life is a succession of lessons which must be lived to be understood.',
//     image: IMAGES.ONBOARDING1,
//     heading: 'We serve incomparable delicacies',
//     btnImage: IMAGES.BUTTON1,
//   },
//   {
//     key: 2,
//     text: 'We serve incomparable delicacies',
//     image: IMAGES.ONBOARDING2,
//     heading: 'We serve incomparable delicacies',
//     btnImage: IMAGES.BUTTON2,
//   },
//   {
//     key: 3,
//     text: 'We serve incomparable delicacies',
//     image: IMAGES.ONBOARDING3,
//     heading: 'We serve incomparable delicacies',
//     btnImage: IMAGES.BUTTON3,
//   },
// ];

// export default function OnBoarding(props) {
//   const slider = useRef();
//   const _renderItem = ({item}) => {
//     return (
//       <ImageBackground source={IMAGES.BG} style={styles.container}>
//         <LinearGradient
//           colors={['#DCD34A', '#2BAE52']}
//           style={styles.floatingContainer}>
//           <View style={styles.topContainer}>
//             <Text style={styles.heading}>{item.heading}</Text>
//             <Text style={styles.title}>
//               All the best restaurants with their top menu waiting for you, they
//               cant’t wait for your order!!
//             </Text>
//           </View>

//           <View style={styles.dotContainer}>
//             {slides.map((data, i) => {
//               return (
//                 <View
//                   key={i}
//                   style={item.key === data.key ? styles.activeDot : styles.dot}
//                 />
//               );
//             })}
//           </View>
//           <View style={styles.bottomContainer}>
//             {item.key === 3 ? (
//               <View style={{flex: 1, alignItems: 'center'}}>
//                 <Image source={IMAGES.BUTTON1} style={styles.img} />
//               </View>
//             ) : (
//               <>
//                 <TouchableOpacity
//                   onPress={() => props.navigation.navigate('SignIn')}>
//                   <Text style={styles.btnTxt}>Skip</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.btnContainer}
//                   onPress={() => slider.current.goToSlide(item.key, false)}>
//                   <Text style={styles.btnTxt}>
//                     Next{' '}
//                     <Feather
//                       name={'arrow-right'}
//                       size={16}
//                       color={COLORS.WHITE}
//                     />
//                   </Text>
//                 </TouchableOpacity>
//               </>
//             )}
//           </View>
//         </LinearGradient>
//       </ImageBackground>
//     );
//   };

//   return (
//     <>
//       <StatusBar
//         translucent={false}
//         backgroundColor={COLORS.WHITE}
//         barStyle="dark-content"
//       />
//       <AppIntroSlider
//         renderItem={_renderItem}
//         data={slides}
//         showSkipButton={false}
//         showNextButton={false}
//         showDoneButton={false}
//         activeDotStyle={{backgroundColor: COLORS.WHITE}}
//         dotStyle={{backgroundColor: COLORS.WHITE}}
//         ref={ref => (slider.current = ref)}
//         renderPagination={() => null}
//       />
//     </>
//   );
// }

import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {IMAGES} from '../../../constants/images';
import styles from './style';
import {COLORS} from '../../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import GradientBtn from '../../../components/gradient-btn';
import Feather from 'react-native-vector-icons/Feather';

var {width} = Dimensions.get('window');

const slides = [
  {
    key: 1,
    text: 'Life is a succession of lessons which must be lived to be understood.',
    image: IMAGES.ONBOARDING1,
    heading: 'We serve incomparable delicacies',
    btnImage: IMAGES.BUTTON1,
  },
  {
    key: 2,
    text: 'We serve incomparable delicacies',
    image: IMAGES.ONBOARDING2,
    heading: 'We serve incomparable delicacies',
    btnImage: IMAGES.BUTTON2,
  },
  {
    key: 3,
    text: 'We serve incomparable delicacies',
    image: IMAGES.ONBOARDING3,
    heading: 'We serve incomparable delicacies',
    btnImage: IMAGES.BUTTON3,
  },
];

export default function OnBoarding(props) {
  const slider = useRef();
  const _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#DCD34A', '#2BAE52']}
          style={styles.floatingContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.heading}>{item.heading}</Text>
            <Text style={styles.title}>
              All the best restaurants with their top menu waiting for you, they
              cant’t wait for your order!!
            </Text>
          </View>

          <View style={styles.dotContainer}>
            {slides.map((data, i) => {
              return (
                <View
                  key={i}
                  style={item.key === data.key ? styles.activeDot : styles.dot}
                />
              );
            })}
          </View>
          <View style={styles.bottomContainer}>
            {item.key === 3 ? (
              <TouchableOpacity
                style={{flex: 1, alignItems: 'center'}}
                onPress={() => props.navigation.navigate('CreateAccount')}>
                <Image source={IMAGES.BUTTON1} style={styles.img} />
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('OtpLogin')}>
                  <Text style={styles.btnTxt}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btnContainer}
                  onPress={() => slider.current.goToSlide(item.key, false)}>
                  <Text style={styles.btnTxt}>
                    Next{' '}
                    <Feather
                      name={'arrow-right'}
                      size={16}
                      color={COLORS.WHITE}
                    />
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <ImageBackground
        // resizeMode="contain"
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container2}
        source={{
          uri: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww',
        }}>
        <View style={styles.gradientContainer}>
          <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            activeDotStyle={{backgroundColor: COLORS.WHITE}}
            dotStyle={{backgroundColor: COLORS.WHITE}}
            ref={ref => (slider.current = ref)}
            renderPagination={() => null}
          />
        </View>
      </ImageBackground>
    </>
  );
}

{
  /*'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww', */
}

{
  /*https://cdn.pixabay.com/photo/2021/06/28/18/36/cereals-6372410_640.jpg */
}
