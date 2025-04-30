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
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.primarySemiBold,
    color: COLORS.BLACK,
    paddingHorizontal: 15,
  },
});
