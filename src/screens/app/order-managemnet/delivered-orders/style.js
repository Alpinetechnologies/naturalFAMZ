import {StyleSheet, Dimensions} from 'react-native';
import {FONT_FAMILY} from '../../../../constants/font-family';
import {COLORS} from '../../../../constants/colors';

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
    paddingVertical: 15,
  },
  deliverto: {
    fontSize: 10,
    color: COLORS.GREY,
    fontFamily: FONT_FAMILY.primarySemiBold,
    flex: 1,
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
    borderRadius: 1,
    backgroundColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
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
  addressline: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginBottom: 1,
  },
  ordertxt: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
    marginTop: 5,
  },
  ordercode: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
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
  deliverbox: {
    height: 31,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0FDE7',

    borderRadius: 5,
  },
  undeliverbox: {
    height: 31,
    borderWidth: 1,
    borderColor: '#F20007',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCBCC',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  deliverBy: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
});
