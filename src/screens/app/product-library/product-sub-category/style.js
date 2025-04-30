import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  searchContainer: {
    paddingBottom: 10,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    borderBottomWidth: 1,
    borderColor: COLORS.EXTRALIGHT_GREY,
    marginBottom: 10,
  },
  imagecard: {
    borderRadius: 5,
    paddingVertical: 10,
    // height: 60,
    width: 82,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    borderColor: COLORS.LIGHT_GREY,
  },
  catContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addBtn: {
    paddingHorizontal: 25,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDFFE7',
    marginTop: 4,
    paddingVertical: 2,
  },
  btnTxt: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  name: {
    fontSize: 16,
    fontFamily: FONT_FAMILY.primaryMedium,
    color: COLORS.BLACK,
  },
  desc: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.BLACK,
  },
});
