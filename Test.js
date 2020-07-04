import React from "react";
import { View, StyleSheet } from "react-native";
import MoreOptionButton from "./components/Button/MainAccordionButton";
import SubOptionItem from "./components/Misc/SubOptionItem";

const Test = () => {
  return (
    <View style={styles.container}>
      {/* <MoreOptionButton stretched={false} /> */}
      <SubOptionItem />
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

export default Test;
