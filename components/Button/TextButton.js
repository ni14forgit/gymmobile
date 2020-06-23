import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontType } from "../../assets/Constants";

const TextButton = (props) => {
  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={0.6}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    color: Color.blue,
    fontFamily: FontType.medium,
    fontSize: FontType.button,
  },
});

export default TextButton;
