import React from "react";
import { View, StyleSheet } from "react-native";
import MainTemplate from "../models/MainTemplate";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
];

const renderScene = {
  first: FirstRoute,
  second: SecondRoute,
};

const Progress = () => {
  return <MainTemplate routes={routes} renderScene={renderScene} />;
};

export default Progress;
