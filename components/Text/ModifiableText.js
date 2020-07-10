import React from "react";
import { Text, StyleSheet } from "react-native";
import { Color } from "../../assets/Constants";

const ModifiableText = (props) => {
  const styles = StyleSheet.create({
    text: {
      color: Color.blue,
      fontSize: props.size,
      fontFamily: props.family,
    },
  });

  return (
    <Text numberOfLines={props.numlines} style={[styles.text, props.style]}>
      {props.text}
    </Text>
  );
};

export default ModifiableText;
