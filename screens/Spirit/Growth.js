import React from "react";
import Spirit from "../../models/Spirit";
import Utilize from "../../assets/Image/utilize.png";
import { Statements } from "../../assets/Constants";
const Growth = () => {
  return <Spirit back={true} image={Utilize} text={Statements.spirit.third} />;
};

export default Growth;
