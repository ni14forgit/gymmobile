import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import {
  Color,
  FontType,
  Padding,
  Dimension,
  BorderRadius,
  TouchOpacity,
} from "../../../assets/Constants";

const Decline = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: props.selected ? Color.white : Color.blue,
      fontFamily: FontType.regular,
      fontSize: FontType.button,
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.selected ? Color.blue : Color.grey,
      height: Dimension.circle,
      paddingHorizontal: Padding.input.horizButton,
      borderRadius: BorderRadius.button,
      borderColor: props.selected ? Color.blue : Color.grey,
      borderWidth: props.selected ? 1 : 0,
    },
  });

  return (
    <TouchableOpacity
      style={[props.style]}
      activeOpacity={TouchOpacity}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Decline;
