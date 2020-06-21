import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontType } from "../../assets/Constants";
const Title = (props) => {
  // numberOfLines={3}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontType.title,
    color: Color.blue,
    fontFamily: FontType.bold,
  },
  container: {
    width: "72%",
    // flex: 1,
    alignItems: "center",
  },
});

export default Title;
