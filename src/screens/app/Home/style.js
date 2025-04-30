import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONT_FAMILY} from '../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },

  heading: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginBottom: 10,
  },
  cardcontainer: {
    width: width / 4 - 15,
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card2: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 44,
    width: 44,
    borderRadius: 44,
    backgroundColor: COLORS.PRIMARY,
    marginBottom: 5,
  },
  title: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.PRIMARY,
    textAlign: 'center',
    marginTop: 2.5,
    //  margin: 5,
  },

  count: {
    fontSize: 22,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginRight: 8,
  },
  counttitle: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primaryMedium,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 12.5,
    marginBottom: 16,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
});
