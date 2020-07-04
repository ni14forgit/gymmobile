import React from "react";
import Spirit from "../../models/Spirit";
import Utilize from "../../../assets/Image/utilize.png";
import { Statements, Screens } from "../../../assets/Constants";
const Growth = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.KNOWYOU);
  };

  return (
    <Spirit
      back={true}
      forward={forward}
      image={Utilize}
      text={Statements.spirit.third}
    />
  );
};

export default Growth;
