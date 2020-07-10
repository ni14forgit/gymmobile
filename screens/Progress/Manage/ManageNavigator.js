import React from "react";
import StackModel from "../../../navigation/StackModel";
import Options from "./Options";

const SCREENS = [{ name: "Main", screen: Options }];

const ManageNavigator = () => {
  return <StackModel SCREENS={SCREENS} InitialScreenName="Main" />;
};

export default ManageNavigator;
