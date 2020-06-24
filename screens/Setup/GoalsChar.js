import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ColoredOptions from "../../components/Input/Basic/ColoredOption";
import { Survey, Margin, Statements, Dimension } from "../../assets/Constants";
import QNavigator from "../../components/Misc/QNavigator";
import ScrollQuestion from "../../components/Input/ScrollQuestion";

const GoalsChar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollQuestion
        options={Survey.options.goals}
        question={Survey.question.goals}
      />
      <ScrollQuestion
        options={Survey.options.characteristics}
        question={Survey.question.characteristics}
      />
      <QNavigator
        selected={0}
        numpages={4}
        textbuttontext={Statements.button.back}
        filledbuttontext={Statements.button.continue}
        // textbuttonstyle={}
        filledbuttonstyle={styles.filledbutton}
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
