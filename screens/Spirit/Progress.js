import React from "react";
import Spirit from "../../models/Spirit";
import Upgrade from "../../assets/Image/upgrade.png";
import { Statements } from "../../assets/Constants";
const Progress = () => {
  return <Spirit back={true} image={Upgrade} text={Statements.spirit.second} />;
};

export default Progress;
