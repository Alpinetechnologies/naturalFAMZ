import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONT_FAMILY} from '../constants/font-family';
var {width} = Dimensions.get('window');
import Feather from 'react-native-vector-icons/Feather';
import SelectDropdown from 'react-native-select-dropdown';

export default function Dropdown(props) {
  // let defaultValue = props.items.find(obj => {
  //   return obj.value === props.defaultValue;
  // });

  // let disabled = props.items.length <= 0;

  return (
    <View style={{marginVertical: 10}}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <SelectDropdown
            //  disabled={disabled}
            placeholder={props.placeholder}
            data={props.items}
            search={props.search}
            searchInputStyle={styles.searchInputStyle}
            searchInputTxtColor={COLORS.BLACK}
            searchPlaceHolder="Search"
            searchPlaceHolderColor={COLORS.EXTRALIGHT_GREY}
            //  defaultValue={props.defaultValue}
            defaultButtonText={props.placeholder}
            selectedRowStyle={{backgroundColor: COLORS.BG}}
            onSelect={props.onChange}
            buttonStyle={styles.buttonStyle}
            // buttonTextStyle={
            // //  defaultValue
            //     ? styles.selectedBtnTextStyle
            //     : styles.buttonTextStyle
            // }
            buttonTextStyle={styles.selectedBtnTextStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.rowStyle}
            rowTextStyle={styles.rowTextStyle}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem.label;
            }}
            rowTextForSelection={item => {
              return item.label;
            }}
          />
          <Feather
            style={styles.icon}
            size={18}
            color={COLORS.BLACK}
            name={'chevron-down'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
    overflow: 'hidden',
    borderColor: COLORS.EXTRALIGHT_GREY,
  },
  searchInputStyle: {
    backgroundColor: COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
    alignSelf: 'center',
  },

  buttonStyle: {
    width: width - 40,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.EXTRALIGHT_GREY,
    backgroundColor: '#F3F3F3',
    color: COLORS.BLACK,
    //position: 'absolute',
  },

  buttonTextStyle: {
    textAlign: 'left',
    marginLeft: 7,
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
    color: '#999999',
  },

  selectedBtnTextStyle: {
    textAlign: 'left',
    marginLeft: 7,
    fontFamily: FONT_FAMILY.primary,
    fontSize: 12,
    color: COLORS.BLACK,
  },
  dropdownStyle: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    //maxHeight: 200,
  },
  rowStyle: {
    borderBottomColor: COLORS.EXTRALIGHT_GREY,
  },
  rowTextStyle: {
    fontSize: 13,
    fontFamily: FONT_FAMILY.primary,
    color: COLORS.BLACK,
    textAlign: 'left',
    marginLeft: 17.5,
  },
  icon: {
    marginRight: 5,
    right: 7.5,
    position: 'absolute',
  },
  label: {
    fontSize: 12,
    color: COLORS.BLACK,
    marginBottom: 5,
    fontFamily: FONT_FAMILY.primary,
    marginHorizontal: 3,
  },
  title: {
    fontSize: 12,
    color: COLORS.BLACK,
    marginBottom: 5,
    fontFamily: FONT_FAMILY.primary,
    marginHorizontal: 3,
    paddingLeft: 5,
  },
});
