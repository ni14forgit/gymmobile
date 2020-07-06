import React from "react";
import { TouchableOpacity } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import { XSvg } from "../../assets/Icons/MiscSVG";
import { Color } from "../../assets/Constants";
import { Dimensions } from "../../assets/Constants/ProgressConstants";

const XButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <IconTemplate
        color={Color.blue}
        activityicon={XSvg}
        width={Dimensions.modal.xButton.width}
        height={Dimensions.modal.xButton.height}
      />
    </TouchableOpacity>
  );
};

export default XButton;
