import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONT_FAMILY} from '../../../../constants/font-family';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 10,
  },
  cardcontainer: {
    width: width / 4 - 15.5,
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
    //  backgroundColor: 'pink',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    // overflow: 'hidden',
  },

  title: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.BLACK,
    textAlign: 'center',

    //  margin: 5,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primarySemiBold,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: COLORS.BLACK,
    marginBottom: 5,
    fontFamily: FONT_FAMILY.primaryMedium,
    marginHorizontal: 3,
  },

  btn: {
    // height: 42.5,
    // borderRadius: 4,
    borderBottomWidth: 1,
    borderColor: COLORS.BG,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'row',
  },

  uploadBtn: {
    height: 50,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    fontSize: 11,
    color: COLORS.WHITE,
    fontFamily: FONT_FAMILY.primaryMedium,
  },

  selectContainer: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.SKY_BLUE,
    paddingVertical: 5,
    borderRadius: 5,
  },
  fileName: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.primary,
    // marginBottom: -2,
    flex: 1,
  },

  cancel: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 10,
  },
});
