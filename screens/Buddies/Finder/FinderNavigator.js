import React from "react";
import StackModel from "../../../navigation/StackModel";
import BuddyFinder from "./BuddyFinder";

const SCREENS = [{ name: "Main", screen: BuddyFinder }];

const FinderNavigator = () => {
  return <StackModel SCREENS={SCREENS} InitialScreenName="Main" />;
};

export default FinderNavigator;
