import React from "react";
import StackModel from "../../navigation/StackModel";
import TrainersList from "./TrainersList";

const SCREENS = [{ name: "Main", screen: TrainersList }];

const TrainersNavigator = () => {
  return <StackModel SCREENS={SCREENS} InitialScreenName="Main" />;
};

export default TrainersNavigator;
