import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FontType, Color, Survey } from "../../../assets/Constants";
import ConfigModal from "../../models/Settings/ConfigModal";
import UserInput from "../../../components/Input/UserInput";

// this is where Regimen should handle it's own data, probably with Redux
const PasswordComponent = () => {
  var initialData = {};

  const [selection, setSelection] = useState(initialData);

  const toggleItem = (index) => {
    setSelection({ ...selection, [index]: !selection[index] });
    console.log(selection);
  };

  useEffect(() => {
    var toBecome = {};
    for (var i; i < Survey.options.goals.length; i++) {
      toBecome[[i]] = true;
    }

    initialData = toBecome;
  });

  return (
    <View style={styles.container}>
      <UserInput placeholder="Old Password" />
      <UserInput placeholder="New Password" />
      <UserInput placeholder="New Password Repeated" />
    </View>
  );
};

const Password = ({ isVisible, changeClose, xClose }) => {
  return (
    <ConfigModal
      MainComponent={PasswordComponent}
      isVisible={isVisible}
      changeClose={() => changeClose(true, "password")}
      xClose={xClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "92%",
    alignItems: "center",
    // flex: 1,
    // height: "50%",
    // borderColor: "blue",
    // borderWidth: 2,
  },

  innerText: {
    width: "90%",
  },

  innerRow: {
    flexDirection: "row",
    justifyContent: "space-around",

    // borderColor: "red",
    // borderWidth: 2,
  },
});

export default Password;
