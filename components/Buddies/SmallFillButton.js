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

const SmallFillButton = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: Color.white,
      fontFamily: FontType.medium,
      fontSize: FontType.buddysmall,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Color.blue,
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: 5,
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

export default SmallFillButton;
