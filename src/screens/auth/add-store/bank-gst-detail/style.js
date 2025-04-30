import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  stepsContainer: {
    flexDirection: 'row',
    //justifyContent: 'center',
    marginBottom: 5,
    alignItems: 'center',
    marginHorizontal: 25,
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completedStep: {
    //  backgroundColor: COLORS.GREEN,
    borderRadius: 11,
    height: 11,
    justifyContent: 'center',
    alignItems: 'center',

    width: 11,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREY,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.BLACK,
    borderRadius: 4,
  },
  completedStepTxt: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primary,
  },
  activestep: {
    backgroundColor: COLORS.GREEN,
    borderRadius: 10,
    height: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: 7,
  },
  pendingStep: {
    //  backgroundColor: COLORS.GREEN,
    borderRadius: 11,
    height: 11,
    justifyContent: 'center',
    alignItems: 'center',

    width: 11,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
  },

  pendingStepTxt: {
    fontSize: 14,
    color: '#E7E7E7',
    fontFamily: FONT_FAMILY.primary,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
    textAlign: 'center',
    marginHorizontal: 8,
    flex: 1,
  },
  inactivetext: {
    fontSize: 10,
    color: COLORS.LIGHT_GREY3,
    fontFamily: FONT_FAMILY.primary,
    textAlign: 'center',
    marginHorizontal: 8,
    flex: 1,
  },
  heading: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
    marginBottom: 10,
  },
  docList: {
    borderWidth: 1,
    paddingVertical: 17.5,
    borderColor: COLORS.EXTRALIGHT_GREY,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
  },
  docType: {
    fontSize: 13,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    //   flex: 1,
  },
  docName: {
    fontSize: 11,
    color: COLORS.DARK_GREY,
    fontFamily: FONT_FAMILY.primary,
    // marginTop: 5,
  },
  btn: {
    backgroundColor: COLORS.PRIMARY,
    paddingHorizontal: 12.5,
    height: 25,
    justifyContent: 'center',
    borderRadius: 5,
  },

  deleteBtn: {
    height: 20,
    width: 20,
    borderRadius: 25,
    backgroundColor: COLORS.RED,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  btnTxt: {
    fontSize: 11,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  cardContainer: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 15,
    // borderRadius: 10,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    // elevation: 3,
    //  marginHorizontal: 5,
    borderColor: COLORS.DARK_GREY,
    borderStyle: 'dashed',
  },

  cardHeading: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
    marginTop: 10,
    marginBottom: -1.5,
  },
  cardSubHeading: {
    fontSize: 11.5,
    color: COLORS.DARK_GREY,
    fontFamily: FONT_FAMILY.primary,
  },
  label: {
    fontSize: 12,
    color: COLORS.BLACK,
    marginVertical: 5,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginHorizontal: 1.5,
  },

  radioBtnTxt: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginLeft: 5,
  },

  radioBtn: {
    height: 12,
    width: 12,
    borderWidth: 0.75,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRadioBtn: {
    height: 7,
    width: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GREEN,
  },

  radioBtnContainer: {flexDirection: 'row', marginTop: 5, marginBottom: 10},

  radioBtnRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },

  bulletContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // alignItems: 'center',
    // marginRight: 30,
    marginBottom: 10,
  },
  bullet: {
    height: 7,
    width: 7,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
    marginTop: 7.5,
  },

  bulletTxt: {
    fontSize: 11,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginLeft: 10,
    flex: 1,
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.EXTRALIGHT_GREY,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#F3F3F3',
    marginVertical: 10.5,
    borderRadius: 8,
  },

  date: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,

    marginLeft: 8,
  },
});
