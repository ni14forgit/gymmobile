import React from "react";
import Spirit from "../../models/Spirit";
import Weightlifter from "../../../assets/Image/weightlifter.png";
import { Statements, Screens } from "../../../assets/Constants";
const SupportSystem = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.PROGRESS);
  };

  return (
    <Spirit
      back={false}
      forward={forward}
      image={Weightlifter}
      text={Statements.spirit.first}
    />
  );
};

export default SupportSystem;
