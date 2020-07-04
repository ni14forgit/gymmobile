import React from "react";
import { View, StyleSheet } from "react-native";
import MainTemplate from "../models/MainTemplate";
import SeeNavigator from "./See/SeeNavigator";
import TrackNavigator from "./Track/TrackNavigator";

// const FirstRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#ff4081" }]} />
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
// );

// const styles = StyleSheet.create({
//   scene: {
//     flex: 1,
//   },
// });

const routes = [
  { key: "track", title: "Track" },
  { key: "view", title: "View" },
];

const renderScene = {
  track: TrackNavigator,
  view: SeeNavigator,
};

const Progress = () => {
  return (
    <MainTemplate title="Progress" routes={routes} renderScene={renderScene} />
  );
};

export default Progress;
