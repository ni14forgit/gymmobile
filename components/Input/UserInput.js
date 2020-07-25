import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { Color } from "../../assets/Constants";
import { FontType } from "../../assets/Constants";
const UserInput = (props) => {
  const [value, onChangeText] = React.useState("");
  return (
    <TextInput
      style={{
        // height: 44,
        borderColor: Color.blue,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20,
        color: Color.blue,
        paddingVertical: 10,
        paddingLeft: 10,
        width: "90%",
        fontFamily: FontType.medium,
        marginVertical: "3%",
      }}
      placeholderTextColor="#334E8B"
      autoCorrect={false}
      placeholder={props.placeholder}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default UserInput;
