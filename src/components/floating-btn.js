import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import {FONT_FAMILY} from '../constants/font-family';

export default function FloatingBtn(props) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={props.onPress}>
      <View style={styles.btn}>
        <Feather size={22} color={COLORS.WHITE} name={'plus'} />

        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 45,
    // width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    paddingHorizontal: 20,
    flexDirection: 'row',
    elevation: 5,
    // margin: 5,
    backgroundColor: COLORS.PRIMARY,
  },

  btnContainer: {
    position: 'absolute',
    bottom: 20,
    elevation: 5,
    right: 20,
  },

  title: {
    color: COLORS.WHITE,
    fontSize: 14,
    fontFamily: FONT_FAMILY.primaryBold,
    textAlign: 'center',
    //  letterSpacing: 0.5,
    // textTransform: 'uppercase',
    marginLeft: 5,
  },
});
