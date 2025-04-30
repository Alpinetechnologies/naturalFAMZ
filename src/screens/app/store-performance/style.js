import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  storeimg: {
    height: 210,
    width: width - 20,

    marginBottom: 20,
    // padding: 15,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  storename: {
    fontSize: 18,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  time: {
    fontSize: 10,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primary,
  },
  profitbox: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: COLORS.EXTRALIGHT_GREY,
    elevation: 3,
    backgroundColor: COLORS.WHITE,
    width: width / 2 - 50,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  profit: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
  },
  totalprofit: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryBold,
  },
  topcontainer: {
    //marginBottom: 10,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 5,
  },
  orderBox: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,
    borderColor: COLORS.EXTRALIGHT_GREY,
    borderWidth: 1,
    paddingHorizontal: 10,
    elevation: 3,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  orderdeliver: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
  },
  totalorder: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryBold,
  },
  totalamount: {
    fontSize: 12,
    color: COLORS.LIGHT_GREEN,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  viewtxt: {
    fontSize: 10,
    color: COLORS.SKY_BLUE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  todaytransaction: {
    fontSize: 10,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.primary,
  },
  card: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.EXTRALIGHT_GREY,
    elevation: 2,
    backgroundColor: COLORS.WHITE,
    width: width - 100,
    paddingRight: 20,
    marginHorizontal: 5,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  totaltransaction: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
    flex: 1,
  },
  from: {
    fontSize: 10,
    color: '#18B828',
    fontFamily: FONT_FAMILY.primary,
  },
  todaydeliverorder: {
    fontSize: 10,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  thisweek: {fontSize: 10, color: COLORS.GREY, fontFamily: FONT_FAMILY.primary},
  weekamount: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  fromweek: {
    fontSize: 10,
    color: '#F20007',
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  ordercancelcard: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.EXTRALIGHT_GREY,
    elevation: 2,
    backgroundColor: COLORS.WHITE,
    width: width - 130,
    paddingRight: 20,
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryBold,
  },
  points: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryBold,
    marginBottom: 5,
  },
  label: {
    overflow: 'hidden',
    borderColor: COLORS.BLACK,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#F5F5F5',
    marginBottom: 5,
  },
  lebelred: {
    width: width / 2 - 30,

    borderColor: COLORS.BLACK,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#FF4F54',
  },
  lebelred2: {
    width: width / 2 - 80,

    borderColor: COLORS.BLACK,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#FF4F54',
  },
  lebelred3: {
    width: width / 2 - 100,

    borderColor: COLORS.BLACK,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#FF4F54',
  },
  rateheading: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryBold,
  },
  ratingcard: {
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.EXTRALIGHT_GREY,
    elevation: 2,
    backgroundColor: COLORS.WHITE,
    width: width - 40,
    paddingRight: 20,
    marginHorizontal: 5,
  },
  deliverimg: {
    height: 35,
    width: 35,
    borderRadius: 35,
    marginRight: 10,
  },
  emoji: {
    height: 20,
    width: 20,
  },
  dlevrname: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    flex: 1,
  },
  rateemoji: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
});
