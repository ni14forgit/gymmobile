import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import UserInput from "../../../components/Input/UserInput";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType, Statements } from "../../../assets/Constants";
import SwitchInput from "../../../components/Input/Basic/Switch";
import QNavigator from "../../../components/Misc/QNavigator";

const Account = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ModifiableText
        text="Some last things..."
        size={FontType.spirit}
        family={FontType.bold}
        style={styles.pad}
      />
      <View style={styles.col}>
        <View style={styles.centeredInput}>
          <UserInput placeholder="Name" />
          <UserInput placeholder="Email" />
          <UserInput placeholder="Password" />
        </View>
        <View style={styles.innerRow}>
          <View style={styles.innerCol}>
            <ModifiableText
              text="I want to find fitness buddies"
              size={FontType.small}
              family={FontType.medium}
            />
            <ModifiableText
              text="Preferences can be changed"
              size={FontType.small}
              family={FontType.regular}
            />
          </View>
          <SwitchInput />
        </View>
      </View>
      <QNavigator
        selected={0}
        numpages={4}
        textbuttontext={Statements.button.back}
        filledbuttontext={Statements.button.done}
        style={styles.qnavigator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  col: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 2,
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    // borderColor: "red",
    // borderWidth: 2,
  },
  innerCol: {},
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
  },
  centeredInput: {
    alignItems: "center",
  },
  pad: {
    marginTop: "10%",
    // borderColor: "red",
    // borderWidth: 2,
  },
});

export default Account;
