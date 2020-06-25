import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  Color,
  FontType,
  BorderRadius,
  TouchOpacity,
} from "../../assets/Constants";
import ModifiableText from "../Text/ModifiableText";
import Swimming from "../../assets/Icons";

// PROBABLY NEED TO USE FLATLIST FOR THIS

const ActivityCard = (props) => {
  const styles = StyleSheet.create({
    container: {
      // height: 230,
      height: "26%",
      width: "40%",
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
    <TouchableOpacity activeOpacity={TouchOpacity} style={styles.container}>
      <Swimming color={props.selected ? Color.white : Color.blue} />
      <ModifiableText
        size={FontType.activityCard}
        family={FontType.bold}
        text="Running"
        style={props.selected ? styles.whiteselected : null}
      />
    </TouchableOpacity>
  );
};

export default ActivityCard;
