import React from "react";
import StackModel from "../../../navigation/StackModel";
import { Screens } from "../../../assets/Constants/ProgressConstants";
import SeeActivities from "./SeeActivities";
import SeeSubOptions from "./SeeSubOptions";

const SCREENS = [
  { name: Screens.see.ACTIVITIES, screen: SeeActivities },
  { name: Screens.see.SUBACTIVITIES, screen: SeeSubOptions },
  //   { name: Screens.see.SEE, screen: SeeActivities },
];

const SeeNavigator = () => {
  return (
    <StackModel SCREENS={SCREENS} InitialScreenName={Screens.see.ACTIVITIES} />
  );
};

export default SeeNavigator;
