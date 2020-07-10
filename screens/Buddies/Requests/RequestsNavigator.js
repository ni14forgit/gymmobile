import React from "react";
import StackModel from "../../../navigation/StackModel";
import BuddyRequests from "./BuddyRequests";

const SCREENS = [{ name: "Main", screen: BuddyRequests }];

const RequestsNavigator = () => {
  return <StackModel SCREENS={SCREENS} InitialScreenName="Main" />;
};

export default RequestsNavigator;
