import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FontType, Color, Survey } from "../../../assets/Constants";
import ConfigModal from "../../models/Settings/ConfigModal";
import ModifiableText from "../../../components/Text/ModifiableText";
import SwitchInput from "../../../components/Input/Basic/Switch";

// this is where Regimen should handle it's own data, probably with Redux
const MatchStatusComponent = () => {
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
      <View style={styles.innerRow}>
        <View style={styles.innerText}>
          <ModifiableText
            text="I want to find fitness buddies"
            size={FontType.description}
            family={FontType.medium}
          />
          <ModifiableText
            text="Preferences can be changed"
            size={FontType.small}
            family={FontType.regular}
            style={{ marginTop: 10 }}
          />
        </View>
        <SwitchInput />
      </View>
    </View>
  );
};

const MatchStatus = ({ isVisible, changeClose, xClose }) => {
  return (
    <ConfigModal
      MainComponent={MatchStatusComponent}
      isVisible={isVisible}
      changeClose={() => changeClose(true, "matchstatus")}
      xClose={xClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
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

export default MatchStatus;
