import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 15,
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
  bg: {
    backgroundColor: COLORS.WHITE,
    padding: 15,
    marginVertical: 5,
  },
});
