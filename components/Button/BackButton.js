import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import { MenuSVG } from "../../assets/Icons/MiscSVG";
import { Color, Dimension } from "../../assets/Constants";

const BackButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <IconTemplate
        color={Color.blue}
        activityicon={MenuSVG}
        width={Dimension.navigation.menuButton.width}
        height={Dimension.navigation.menuButton.height}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
