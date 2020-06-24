import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Modifiable from "../components/Text/ModifiableText";
import { Statements, FontType, Margin } from "../assets/Constants";
import FilledButton from "../components/Button/FilledButton";

const KnowYou = () => {
  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.container}>
        <View style={styles.first}>
          <Modifiable
            size={FontType.spirit}
            family={FontType.bold}
            text={Statements.title.knowyou}
            style={null}
          />
        </View>
        <View style={styles.second}>
          <Modifiable
            size={FontType.description}
            family={FontType.regular}
            text={Statements.description.datacollect}
            style={null}
          />
          <Modifiable
            size={FontType.description}
            family={FontType.regular}
            style={null}
            text={Statements.description.optout}
          />
        </View>
      </View>
      <FilledButton style={styles.button} text="Start" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 4,
    maxHeight: "70%",
    marginLeft: "8%",
    marginRight: "2%",
    marginTop: "40%",
  },
  first: {},
  second: {
    flexDirection: "column",
    maxHeight: "60%",
    flex: 4,
    justifyContent: "space-evenly",
  },
  outer: {
    flex: 1,
  },
  button: {
    flex: 1,
    position: "absolute",
    bottom: Margin.buttonBottom,
    alignSelf: "center",
  },
});

export default KnowYou;
