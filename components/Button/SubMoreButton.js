import React from "react";
import { TouchableOpacity } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import { SubRightMoreSVG } from "../../assets/Icons/MiscSVG";
import { Color, Dimension } from "../../assets/Constants";

const SubMoreButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <IconTemplate
        color={Color.blue}
        activityicon={SubRightMoreSVG}
        width={Dimension.navigation.menuButton.width}
        height={Dimension.navigation.menuButton.height}
      />
    </TouchableOpacity>
  );
};

export default SubMoreButton;
