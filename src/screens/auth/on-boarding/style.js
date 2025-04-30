// import {StyleSheet, Dimensions} from 'react-native';
// import {COLORS} from '../../../constants/colors';
// import {FONT_FAMILY} from '../../../constants/font-family';

// var {width, height} = Dimensions.get('window');

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     padding: 25,
//     justifyContent: 'flex-end',
//   },

//   image: {
//     height: 300,
//     width: width - 50,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     // backgroundColor: 'red',
//   },

//   bottomContainer: {
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   topContainer: {
//     flex: 6,
//     padding: 20,
//     // backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//     //  backgroundColor: 'pink',
//     marginBottom: 15,
//   },

//   dotContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginTop: 30,
//   },

//   activeDot: {
//     width: 24,
//     height: 6,
//     backgroundColor: COLORS.WHITE,
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },
//   dot: {
//     width: 24,
//     height: 6,
//     backgroundColor: COLORS.LIGHT_GREY,
//     borderRadius: 10,
//     marginHorizontal: 5,
//   },

//   title: {
//     fontSize: 13,
//     fontFamily: FONT_FAMILY.primaryMedium,
//     color: COLORS.WHITE,
//     textAlign: 'center',
//     marginHorizontal: 25,
//   },

//   heading: {
//     fontSize: 24,
//     fontFamily: FONT_FAMILY.primaryBold,
//     color: COLORS.WHITE,
//     // marginBottom: 5,
//     marginTop: 15,
//     textAlign: 'center',
//     //  textTransform: 'uppercase',
//   },

//   bottomSkipContainer: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   skip: {
//     fontSize: 14,
//     fontFamily: FONT_FAMILY.primaryMedium,
//     color: COLORS.BLACK,
//   },
//   skipbtn: {
//     position: 'absolute',
//     right: 20,
//     top: 20,
//   },
//   btn: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   img: {
//     height: 80,
//     width: 80,
//     //  resizeMode: 'contain',
//     alignSelf: 'center',
//   },
//   btnContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   floatingContainer: {
//     backgroundColor: COLORS.WHITE,
//     height: 400,
//     // width: width - 40,
//     gap: 32,
//     borderRadius: 48,
//   },
//   btnTxt: {
//     fontSize: 16,
//     fontFamily: FONT_FAMILY.primaryMedium,
//     color: COLORS.WHITE,
//   },
// });

import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/font-family';

var {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: COLORS.WHITE,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    //backgroundColor: COLORS.WHITE,
    paddingBottom: 25,
  },

  topContainer: {
    // flex: 6,
    padding: 20,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor: 'pink',
    marginBottom: 15,
  },
  gradientContainer: {
    flex: 1,
  },
  image: {
    height: 300,
    width: width,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center',
  },
  image2: {
    height: 300,
    width: width,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center',
  },
  image3: {
    height: 300,
    width: width,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center',
  },

  bottomContainer: {
    // padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  infoContainer: {
    flex: 6,
    padding: 20,
    //backgroundColor: 'red',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },

  dotContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    // marginTop: 30,
  },

  activeDot: {
    width: 40,
    height: 4,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    marginHorizontal: 3.5,
  },
  dot: {
    width: 20,
    height: 4,
    backgroundColor: COLORS.LIGHT_GREY,
    borderRadius: 5,
    marginHorizontal: 3.5,
  },

  title: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
    textAlign: 'center',
    marginHorizontal: 25,
  },

  heading: {
    fontSize: 24,
    fontFamily: FONT_FAMILY.primaryBold,
    color: COLORS.WHITE,
    // marginBottom: 5,
    marginTop: 15,
    textAlign: 'center',
    //  textTransform: 'uppercase',
  },

  skipContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  arrow: {height: 7, width: 15, resizeMode: 'stretch'},
  next: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: COLORS.BROWN,
    marginBottom: 2.5,
  },
  skipBtn: {
    backgroundColor: COLORS.WHITE,
    height: 30,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomSkipContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  skip: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
  },
  skipbtn: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    height: 80,
    width: 80,
    //  resizeMode: 'contain',
    alignSelf: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingContainer: {
    backgroundColor: COLORS.WHITE,
    height: 400,
    width: width - 40,
    gap: 32,
    borderRadius: 48,
    justifyContent: 'space-between',
  },
  btnTxt: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.WHITE,
  },
});
