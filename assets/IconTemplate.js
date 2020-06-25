import React from "react";
import { SvgXml } from "react-native-svg";
import { Color } from "./Constants";
const Activity = (props) => {
  const ActivitySVG = () => (
    <SvgXml
      fill={props.color}
      xml={props.activityicon}
      width={props.width}
      height={props.height}
    />
  );

  return <ActivitySVG />;
};

export default Activity;
