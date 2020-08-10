import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ColoredOptions from "../../../components/Input/Basic/ColoredOption";
import { Survey, Margin, Statements, Screens } from "../../../assets/Constants";
import QNavigator from "../../../components/Misc/QNavigator";
import ScrollQuestion from "../../../components/Input/ScrollQuestion";

const GoalsChar = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.ACTIVITIES);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollQuestion
        options={Survey.options.goals}
        question={Survey.question.goals}
      />

      <ScrollQuestion
        options={Survey.options.characteristics}
        question={Survey.question.characteristics}
        style={{ marginTop: 15 }}
      />

      <QNavigator
        selected={1}
        numpages={5}
        textbuttontext={Statements.button.back}
        filledbuttontext={Statements.button.continue}
        nextScreenFunc={forward}
      />
    </SafeAreaView>
  );
};

// IMPELEMT TWO SEPARATE SCROLL VIEWS FOR EACH OF THE OPTIONS!!

const styles = StyleSheet.create({
  container: {
    marginLeft: Margin.left,
    marginRight: Margin.right,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

export default GoalsChar;
