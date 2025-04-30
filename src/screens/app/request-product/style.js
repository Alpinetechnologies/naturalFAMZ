import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 15,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 3,
    backgroundColor: '#F3F3F3',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  touchBtn: {
    height: 31,
    width: 31,
    borderRadius: 2,
    backgroundColor: COLORS.SKY_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qty: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
    marginHorizontal: 10,
  },
  selectqty: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
    flex: 1,
    paddingLeft: 10,
  },
  input: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
    paddingLeft: 15,

    borderRadius: 3,
    borderWidth: 0.2,
    borderColor: COLORS.EXTRALIGHT_GREY,
    backgroundColor: '#F3F3F3',
    color: COLORS.BLACK,
    height: 40,
    marginVertical: 10,
  },
  Btn: {
    borderRadius: 0,
    backgroundColor: COLORS.SKY_BLUE,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginHorizontal: 2.5,
    marginVertical: 30,
  },
  btnTxt: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONT_FAMILY.primarySemiBold,
    textAlign: 'center',
    letterSpacing: 0.5,
    textTransform: 'capitalize',
  },
});
