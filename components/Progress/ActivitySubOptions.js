import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { mix, bin, useTransition } from "react-native-redash";
// import { WeightExercises } from "../../../assets/Constants/ProgressConstants";
import SubOptionCategory from "./SubOptionCategory";
import SubOptionItem from "./SubOptionItem";
import { Dimensions } from "../../assets/Constants/ProgressConstants";

const DATA = [
  { name: "Nathaniel Fitzgerald", points: "$3.45" },
  { name: "Lawrence Fullter Fitzgerald", points: "$3.45" },
  { name: "Jacob Mullins", points: "$3.45" },
  { name: "Jesus Lewis", points: "$3.45" },
  { name: "Johnny Marr", points: "$2.56" },
];

const { not, interpolate } = Animated;

const ActivitySubOptions = ({
  title,
  subtitle,
  svgicon,
  initialstate,
  subitems,
}) => {
  const [open, setOpen] = useState(initialstate);
  const transition = useTransition(
    open,
    not(bin(open)),
    bin(open),
    400,
    Easing.inOut(Easing.ease)
  );
  const height = mix(
    transition,
    0,
    subitems.length * Dimensions.suboptionitemheight
  );

  // const bottomRadius = interpolate(transition, {
  //   inputRange: [0, 16 / 400],
  //   outputRange: [8, 0],
  // });

  const openOptions = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <TouchableWithoutFeedback>
        <Animated.View>
          <SubOptionCategory
            subtitle={subtitle}
            title={title}
            svgicon={svgicon}
            onPress={openOptions}
            stretched={open}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, { height }]}>
        {subitems.map((val) => {
          return <SubOptionItem title={val} />;
        })}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  items: {
    overflow: "hidden",
  },
});

export default ActivitySubOptions;