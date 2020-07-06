import React from "react";
import { View, StyleSheet } from "react-native";
import MainTemplate from "../models/MainTemplate";
import SeeNavigator from "./See/SeeNavigator";
import TrackNavigator from "./Track/TrackNavigator";
import ManageNavigator from "./Manage/ManageNavigator";

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

const DATA = [
  { title: "Track", screen: TrackNavigator },
  { title: "View", screen: SeeNavigator },
  { title: "Manage", screen: ManageNavigator },
];

const Progress = ({ navigation }) => {
  return (
    <MainTemplate
      DATA={DATA}
      onPressDrawer={navigation.toggleDrawer}
      title="Progress"
    />
  );
};

export default Progress;
