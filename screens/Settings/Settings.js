import React from "react";
import LessTemplate from "../models/LessTemplate";
import Configs from "./Configs";

const Progress = ({ navigation }) => {
  return (
    <LessTemplate
      Screen={Configs}
      onPressDrawer={navigation.toggleDrawer}
      title="Settings"
    />
  );
};

export default Progress;
