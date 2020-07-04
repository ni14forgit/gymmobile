import React from "react";
import { View, StyleSheet } from "react-native";
import AccordionList from "./screens/models/Progress/AccordionList";
import Progress from "./screens/Progress/Progress";

const Test = () => {
  return <Progress />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Test;
