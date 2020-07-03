import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { Color } from "../../../assets/Constants";

export default function SwitchInput() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: Color.grey, true: Color.blue }}
        thumbColor={isEnabled ? Color.white : Color.white}
        ios_backgroundColor={Color.grey}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
});
