import React from "react";
import { View, StyleSheet } from "react-native";
import ActivitySubOptions from "../../../components/Progress/ActivitySubOptions";

const AccordionList = () => {
  return (
    <View style={styles.container}>
      <ActivitySubOptions />
      <ActivitySubOptions />
      <ActivitySubOptions />
      <ActivitySubOptions />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default AccordionList;
