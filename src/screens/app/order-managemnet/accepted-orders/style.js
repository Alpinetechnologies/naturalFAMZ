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
  processingBtn: {
    height: 48,
    borderRadius: 6,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  processingTxt: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  deliverTime: {
    fontSize: 12,
    color: '#18B828',
    fontFamily: FONT_FAMILY.primarySemiBold,
    marginRight: 10,
  },
  add: {
    fontSize: 12,
    color: COLORS.SKY_BLUE,
    fontFamily: FONT_FAMILY.primarySemiBold,
  },
  adddBtn: {
    height: 21,
    width: 96,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.SKY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
