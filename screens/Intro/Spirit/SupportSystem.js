import React from "react";
import Spirit from "../../models/Spirit";
import Weightlifter from "../../../assets/Image/weightlifter.png";
import { Statements } from "../../../assets/Constants";
const SupportSystem = () => {
  return (
    <Spirit back={false} image={Weightlifter} text={Statements.spirit.first} />
  );
};

export default SupportSystem;
