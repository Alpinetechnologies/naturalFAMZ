import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },
  card: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.BLACK,
    marginBottom: 10,
  },
  time: {
    fontSize: 10,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.primarySemiBold,
    flex: 1,
  },
  oderbox: {
    height: 20,
    backgroundColor: '#BF0505',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 2,
  },
  order: {
    fontSize: 8,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  ordertxt: {
    fontSize: 13,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
  },
  ordercode: {
    fontSize: 13,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  itemimg: {
    height: 42,
    width: 32,
    resizeMode: 'contain',
  },
  itmname: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,

    marginLeft: 10,
  },
  salerate: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  mrp: {
    fontSize: 8,
    color: COLORS.RED,
    fontFamily: FONT_FAMILY.primary,
    textDecorationLine: 'line-through',
    textAlign: 'right',
  },
  totalBill: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.primarySemiBold,
    marginVertical: 10,
  },
  paid: {
    fontSize: 12,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  paidBox: {
    height: 20,
    width: 60,
    borderRadius: 2,
    backgroundColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  btn: {
    padding: 8,
    //backgroundColor: COLORS.SKY_BLUE,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 3,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  minut: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginHorizontal: 10,
  },
  set: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    flex: 1,
    paddingLeft: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.PRIMARY,
    backgroundColor: '#E2F2FF',
  },
  acceptBtn: {
    height: 48,
    borderRadius: 6,
    backgroundColor: '#159722',
    justifyContent: 'center',

    paddingHorizontal: 60,
  },
  accept: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  timer: {
    fontSize: 12,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primary,
  },
  reject: {
    fontSize: 14,
    color: '#BF0505',
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  modalContainer: {
    backgroundColor: COLORS.WHITE,
    padding: 30,
    borderRadius: 10,
    width: width - 80,
    justifyContent: 'center',
  },
  modaltoptxt: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontFamily: FONT_FAMILY.primarySemiBold,
    marginBottom: 10,
  },
  ratioBtnContainer: {
    marginVertical: 5,
    marginBottom: 15,
  },
  radioBtn: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    marginRight: 20,
  },
  selectedRadioBtn: {
    height: 13,
    width: 13,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
  },

  radioBtnListRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
  },
  cancleBtn: {
    height: 40,
    borderRadius: 4,
    backgroundColor: '#159722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancleBtnTxt: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primaryBold,
  },
});
