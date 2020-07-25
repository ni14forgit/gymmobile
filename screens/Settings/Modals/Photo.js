import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FontType, Color, Survey } from "../../../assets/Constants";
import ConfigModal from "../../models/Settings/ConfigModal";
import ModifiableText from "../../../components/Text/ModifiableText";
import ImagePicker from "../../../components/Input/ImagePicker";

// this is where Regimen should handle it's own data, probably with Redux
const PhotoComponent = () => {
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
      <ImagePicker imgstyle={{ width: 275, height: 329 }} />
    </View>
  );
};

const Photo = ({ isVisible, changeClose, xClose }) => {
  return (
    <ConfigModal
      MainComponent={PhotoComponent}
      isVisible={isVisible}
      changeClose={() => changeClose(true, "photo")}
      xClose={xClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 500,
    // borderColor: "blue",
    // borderWidth: 2,
  },
});

export default Photo;
