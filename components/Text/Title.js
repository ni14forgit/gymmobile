import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontType } from "../../assets/Constants";
const Title = (props) => {
  return <Text style={styles.title}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontType.title,
    color: Color.blue,
    fontFamily: FontType.bold,
  },
});

export default Title;
