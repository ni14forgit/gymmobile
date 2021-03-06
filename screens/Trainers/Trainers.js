import React from "react";
import LessTemplate from "../models/LessTemplate";
import TrainersList from "./TrainersList";

const Progress = ({ navigation }) => {
  return (
    <LessTemplate
      Screen={TrainersList}
      onPressDrawer={navigation.toggleDrawer}
      title="Trainers"
    />
  );
};

export default Progress;
