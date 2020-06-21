import React from "react";
import { StyleSheet, Text } from "react-native";
import { Color, FontType } from "../../assets/Constants";

const SpiritTitle = (props) => {
  return <Text style={[styles.text, props.style]}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Color.blue,
    fontSize: FontType.spirit,
    fontFamily: FontType.regular,
  },
});

export default SpiritTitle;
