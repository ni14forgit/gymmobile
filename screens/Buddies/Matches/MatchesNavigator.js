import React from "react";
import StackModel from "../../../navigation/StackModel";
import BuddyMatches from "./BuddyMatches";

const SCREENS = [{ name: "Main", screen: BuddyMatches }];

const MatchesNavigator = () => {
  return <StackModel SCREENS={SCREENS} InitialScreenName="Main" />;
};

export default MatchesNavigator;
