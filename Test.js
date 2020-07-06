import React from "react";
import { View, StyleSheet } from "react-native";
import AccordionList from "./screens/models/Progress/AccordionList";
import Progress from "./screens/Progress/Progress";
import Activities from "./screens/Intro/Setup/Activities";
import Drawer from "./navigation/Drawer";
import Modal from "./screens/Progress/Manage/Modal";

const Test = () => {
  // return <Drawer />;
  return <Modal />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Test;
