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

const FilledButton = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: Color.white,
      fontFamily: FontType.medium,
      fontSize: FontType.button,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Color.blue,
      height: Dimension.buttonHeight,
      paddingHorizontal: Padding.default.horizButton,
      borderRadius: BorderRadius.button,
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

export default FilledButton;
