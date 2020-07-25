import { Color } from "../../../assets/Constants";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import {
  BorderRadius,
  FontType,
  Padding,
  TouchOpacity,
} from "../../../assets/Constants";

const ColoredOption = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: props.selected ? Color.white : Color.blue,
      fontFamily: FontType.medium,
      fontSize: FontType.button,
    },
    button: {
      //   justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.selected ? Color.blue : Color.white,
      paddingHorizontal: Padding.goalscharbutton.width,
      paddingVertical: Padding.goalscharbutton.height,
      // borderRadius: BorderRadius.goalschar,
      borderRadius: 10,
      borderColor: Color.blue,
      borderWidth: 2,
    },
  });

  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={TouchOpacity}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ColoredOption;
