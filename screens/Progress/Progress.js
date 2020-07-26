import React from "react";
import { View, StyleSheet } from "react-native";
import MainTemplate from "../models/MainTemplate";
import SeeNavigator from "./See/SeeNavigator";
import TrackNavigator from "./Track/TrackNavigator";
import ManageNavigator from "./Manage/ManageNavigator";
import { useSelector } from "react-redux";

const DATA = [
  { title: "Track", screen: TrackNavigator },
  { title: "View", screen: SeeNavigator },
  { title: "Manage", screen: ManageNavigator },
];

const Progress = ({ navigation }) => {
  const progressTitle = useSelector((state) => state.progress.progresstitle);

  return (
    <MainTemplate
      DATA={DATA}
      onPressDrawer={navigation.toggleDrawer}
      title={progressTitle}
    />
  );
};

export default Progress;
