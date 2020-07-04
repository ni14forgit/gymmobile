import React from "react";
import Spirit from "../../models/Spirit";
import Upgrade from "../../../assets/Image/upgrade.png";
import { Statements, Screens } from "../../../assets/Constants";
const Progress = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.GROWTH);
  };
  return (
    <Spirit
      back={true}
      forward={forward}
      image={Upgrade}
      text={Statements.spirit.second}
    />
  );
};

export default Progress;
