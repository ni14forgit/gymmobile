import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  Color,
  FontType,
  BorderRadius,
  TouchOpacity,
} from "../../assets/Constants";
import ModifiableText from "../Text/ModifiableText";
import IconTemplate from "../../assets/IconTemplate";

// PROBABLY NEED TO USE FLATLIST FOR THIS

const ActivityCard = (props) => {
  const styles = StyleSheet.create({
    container: {
      // height: 300,
      // width: 280,
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      shadowColor: Color.black,
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      backgroundColor: props.selected ? Color.blue : Color.white,
      // borderColor: "red",
      // borderWidth: 2,
      borderRadius: BorderRadius.activityCard,
    },
    whiteselected: {
      color: "white",
    },
  });
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.95}
      style={[styles.container, props.style]}
    >
      <IconTemplate
        color={props.selected ? Color.white : Color.blue}
        height="75%"
        width="75%"
        activityicon={props.activityicon}
      />
      <ModifiableText
        size={FontType.activityCard}
        family={FontType.bold}
        text={props.title}
        style={props.selected ? styles.whiteselected : null}
      />
    </TouchableOpacity>
  );
};

export default ActivityCard;
