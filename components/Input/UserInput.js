import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Color } from "../../assets/Constants";
import { FontType } from "../../assets/Constants";
const UserInput = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <TextInput
      style={{
        height: 44,
        borderColor: Color.blue,
        borderWidth: 1,
        borderRadius: 5,
      }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default UserInput;
