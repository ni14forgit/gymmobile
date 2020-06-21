import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Color,
  FontType,
  Padding,
  Dimension,
  BorderRadius,
  TouchOpacity,
} from "../../assets/Constants";

const OutlinedButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.spacing}
      activeOpacity={TouchOpacity}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Color.blue,
    fontFamily: FontType.regular,
    fontSize: FontType.button,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
    height: Dimension.buttonHeight,
    paddingHorizontal: Padding.horizButton,
    borderRadius: BorderRadius,
    borderColor: Color.blue,
    borderWidth: 2,
  },
  spacing: {
    paddingLeft: 20,
    paddingRight: "20%",
  },
});

export default OutlinedButton;
