import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import ColoredOptions from "../../components/Input/Basic/ColoredOption";
import { Survey, Margin, Statements, Dimension } from "../../assets/Constants";
import QNavigator from "../../components/Misc/QNavigator";

const GoalsChar = () => {
  return (
    <View style={styles.container}>
      <ColoredOptions text="hihihihihih" />
    </View>
  );
};

// IMPELEMT TWO SEPARATE SCROLL VIEWS FOR EACH OF THE OPTIONS!!

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
    marginTop: "10%",
  },
});

export default GoalsChar;
