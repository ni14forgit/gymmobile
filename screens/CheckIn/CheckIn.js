import React from "react";
import LessTemplate from "../models/LessTemplate";
import QRCode from "./QRCode";

const Progress = ({ navigation }) => {
  return (
    <LessTemplate
      Screen={QRCode}
      onPressDrawer={navigation.toggleDrawer}
      title="Daily Check In"
    />
  );
};

export default Progress;
