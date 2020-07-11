import React from "react";
import { TouchableOpacity } from "react-native";
import IconTemplate from "../../../assets/IconTemplate";
import {
  LeftScrollAngleSVG,
  RightScrollAngleSVG,
} from "../../../assets/Icons/MiscSVG";
import { Color, Dimension } from "../../../assets/Constants";

const LeftButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <IconTemplate
        width={20}
        height={20}
        activityicon={LeftScrollAngleSVG}
        color={Color.blue}
      />
    </TouchableOpacity>
  );
};

const RightButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <IconTemplate
        width={20}
        height={20}
        activityicon={RightScrollAngleSVG}
        color={Color.blue}
      />
    </TouchableOpacity>
  );
};

export { LeftButton, RightButton };
