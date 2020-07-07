import React from "react";
import { ActivityTitles } from "../../assets/Constants/BuddyConstants";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { FontType, TouchOpacity, Color } from "../../assets/Constants";
import { BorderRadius, Padding } from "../../assets/Constants/BuddyConstants";

const MatchActivityInputs = (props) => {
  const marginDiff = props.selected ? 2 : 0;
  const styles = StyleSheet.create({
    text: {
      color: props.selected ? Color.white : Color.blue,
      fontFamily: FontType.medium,
      fontSize: FontType.reallysmall,
    },
    button: {
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.selected ? Color.blue : Color.white,
      paddingHorizontal: Padding.matchactivitynames.horizontal + marginDiff,
      paddingVertical: Padding.matchactivitynames.vertical + marginDiff,
      borderRadius: BorderRadius.matchactivitynames,
      borderColor: Color.blue,
      borderWidth: props.selected ? 0 : 2,
    },
  });

  return (
    <TouchableOpacity
      style={props.style}
      activeOpacity={TouchOpacity}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MatchActivityInputs;
