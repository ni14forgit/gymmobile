import React from "react";
import Toast from "react-native-easy-toast";
import { View } from "react-native";
import { FontType, Color } from "../../assets/Constants";

const Toaster = ({ toastRef }) => {
  return (
    <Toast
      ref={toastRef}
      style={{
        backgroundColor: "#b8c3db",
        opacity: 1,
        borderRadius: 5,
        // borderColor: "red",
        // borderWidth: 2,
        alignItems: "center",
        maxWidth: "80%",
        zIndex: 4,
      }}
      position="top"
      positionValue={60}
      fadeInDuration={500}
      fadeOutDuration={500}
      opacity={0.8}
      textStyle={{
        color: Color.blue,
        fontFamily: FontType.medium,
        fontSize: FontType.small,
        textAlign: "center",
      }}
    />
  );
};

export default Toaster;
