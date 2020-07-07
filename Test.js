import React from "react";
import { View, StyleSheet } from "react-native";
import AccordionList from "./screens/models/Progress/AccordionList";
import Progress from "./screens/Progress/Progress";
import Activities from "./screens/Intro/Setup/Activities";
import Drawer from "./navigation/Drawer";
import MatchActivityInputs from "./components/Buddies/MatchActivityInputs";
import MatchActivityList from "./components/Buddies/MatchActivityList";
import { ExampleMatchActivityData } from "./assets/Constants/BuddyConstants";
// import Modal from "./screens/Progress/Manage/Modal";

const Test = () => {
  // return <Drawer />;

  return (
    <View style={styles.container}>
      {/* <MatchActivityInputs selected={true} text="Hi there" /> */}
      <MatchActivityList Activities={ExampleMatchActivityData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
  },
});

export default Test;
