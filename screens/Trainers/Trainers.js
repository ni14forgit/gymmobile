import React from "react";
import { View, StyleSheet } from "react-native";
import LessTemplate from "../models/LessTemplate";
import TrainersList from "./TrainersList";
import TrainerModal from "./TrainerModal";

const Progress = ({ navigation }) => {
  return (
    <LessTemplate
      Screen={TrainerModal}
      onPressDrawer={navigation.toggleDrawer}
      title="Trainers"
    />
  );
};

export default Progress;
