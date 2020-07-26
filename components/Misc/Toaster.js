import React from "react";
import Toast from "react-native-easy-toast";
import { FontType, Color } from "../../assets/Constants";

const Toaster = ({ toastRef }) => {
  return (
    <Toast
      ref={toastRef}
      style={{ backgroundColor: Color.grey, opacity: 0.8, borderRadius: 5 }}
      position="top"
      positionValue={0}
      fadeInDuration={500}
      fadeOutDuration={500}
      opacity={0.8}
      textStyle={{
        color: Color.blue,
        fontFamily: FontType.medium,
        fontSize: FontType.small,
      }}
    />
  );
};

export default Toaster;
