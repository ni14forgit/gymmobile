import React from "react";
import { View, StyleSheet } from "react-native";
import LessTemplate from "../models/LessTemplate";
import TrainersNavigation from "./TrainersNavigation";

const DATA = [{ title: "h", screen: TrainersNavigation }];

const Progress = ({ navigation }) => {
  return (
    <LessTemplate
      //   DATA={DATA}
      Screen={TrainersNavigation}
      onPressDrawer={navigation.toggleDrawer}
      title="Trainers"
    />
  );
};

export default Progress;
