import React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../../../assets/Constants";

const Dot = (props) => {
  const stylesDot = StyleSheet.create({
    dot: {
      width: 15,
      height: 15,
      borderRadius: 15,
      backgroundColor: props.selected ? Color.blue : Color.grey,
      marginHorizontal: 8,
    },
  });
  return <View style={stylesDot.dot}></View>;
};

const DotsTracker = (props) => {
  const items = [];

  for (var i = 0; i < props.num; i++) {
    items.push(<Dot selected={props.selected === i ? true : false} />);
  }

  return <View style={stylesTracker.container}>{items}</View>;
};

const stylesTracker = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // flex: 1,
    // position: "absolute",
  },
});

export default DotsTracker;
