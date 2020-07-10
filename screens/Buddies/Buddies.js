import React from "react";
import MainTemplate from "../models/MainTemplate";
import FinderNavigator from "./Finder/FinderNavigator";
import MatchesNavigator from "./Matches/MatchesNavigator";
import RequestsNavigator from "./Requests/RequestsNavigator";

const DATA = [
  { title: "Finder", screen: FinderNavigator },
  { title: "Requests", screen: RequestsNavigator },
  { title: "Buddies", screen: MatchesNavigator },
];

const Buddies = ({ navigation }) => {
  return (
    <MainTemplate
      DATA={DATA}
      onPressDrawer={navigation.toggleDrawer}
      title="Buddies"
    />
  );
};

export default Buddies;
