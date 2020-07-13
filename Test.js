import React from "react";
import { View, StyleSheet } from "react-native";
// import ProfileCard from "./components/Buddies/ProfileCard";
// import Modal from "./screens/Progress/Manage/Modal";
import BuddyFinder from "./screens/Buddies/Finder/BuddyFinder";
import MatchCard from "./components/Buddies/MatchCard";
import Drawer from "./navigation/Drawer";
import IntroNavigator from "./navigation/IntroNavigator";

const Test = () => {
  // return <Drawer />;

  return (
    <View style={styles.container}>
      <Drawer />
      {/* <MatchCard /> */}
      {/* <ProfileCard /> */}
      {/* <MatchActivityList Activities={ExampleMatchActivityData} /> */}
      {/* <BuddyFinder /> */}
      {/* <IntroNavigator /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 200,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Test;
