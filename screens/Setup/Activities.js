import React from "react";
import { View, StyleSheet } from "react-native";
import ActivityCard from "../../components/Input/ActivityCard";

const Activities = () => {
  return (
    <View style={styles.container}>
      <ActivityCard selected={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});

export default Activities;
