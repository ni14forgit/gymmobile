import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import { XSvg, PlusSVG } from "../../assets/Icons/MiscSVG";
import { Color, Dimension } from "../../assets/Constants";

const MainAccordionButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        { backgroundColor: props.stretched ? Color.blue : Color.grey },
      ]}
      onPress={props.onPress}
    >
      <IconTemplate
        color={props.stretched ? Color.white : Color.blue}
        activityicon={props.stretched ? XSvg : PlusSVG}
        width={props.stretched ? 13 : 16}
        height={props.stretched ? 13 : 16}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 20,
    // backgroundColor: Color.blue,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default MainAccordionButton;
