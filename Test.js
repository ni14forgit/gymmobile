import React from "react";
import { View, StyleSheet } from "react-native";
import Drawer from "./navigation/Drawer";
import IntroNavigator from "./navigation/IntroNavigator";

const Test = () => {
  return (
    <View style={styles.container}>
      {/* <IntroNavigator /> */}
      <Drawer />
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
