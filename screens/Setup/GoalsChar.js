import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BasicQuestion from "../../components/Input/BasicQuestion";
import SliderInput from "../../components/Input/Basic/Slider";
import { Survey, Margin, Statements, Dimension } from "../../assets/Constants";
import DotsTracker from "../../components/Misc/DotsTracker";
import TextButton from "../../components/Button/TextButton";
import FilledButton from "../../components/Button/FilledButton";

const GoalsChar = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <View style={styles.basicquestion}>
          <BasicQuestion
            question={Survey.question.timesaweek}
            options={Survey.options.numbers7plus}
          />
        </View>
        <View style={styles.basicquestion}>
          <BasicQuestion
            question={Survey.question.years}
            options={Survey.options.numbers5plus}
          />
        </View>
        <View style={styles.slider}>
          <SliderInput
            minval={Survey.options.age.min}
            maxval={Survey.options.age.max}
            question={Survey.question.age}
            disabled={false}
          />
        </View>
        <View style={styles.slider}>
          <SliderInput
            minval={Survey.options.weight.min}
            maxval={Survey.options.weight.max}
            question={Survey.question.weight}
            disabled={false}
          />
        </View>
      </View>
      {/* <View style={styles.general}>
        <DotsTracker track={0} num={4} />
      </View>
      <View style={styles.bottomRowContainer}>
        <TextButton style={styles.textButton} text={Statements.button.back} />
        <FilledButton
          style={styles.filledbutton}
          text={Statements.button.continue}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    marginLeft: Margin.left,
    marginRight: Margin.right,
    flex: 1,
  },
  container: {
    marginTop: "15%",
    marginBottom: "10%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomRowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // flex: 4,
    alignSelf: "center",
    position: "absolute",
    bottom: Margin.buttonBottom,
  },
  filledbutton: {
    minWidth: Dimension.button.continue.width,
    maxWidth: Dimension.button.continue.width,
  },
  textButton: {
    marginTop: 15,
    marginRight: "35%",
  },

  basicquestion: {
    // borderColor: "black",
    // borderWidth: 4,
    flex: 5,
    justifyContent: "center",
  },
  slider: {
    // borderColor: "black",
    // borderWidth: 4,
    justifyContent: "center",
    flex: 4,
  },
  general: {
    // flex: 1,
  },
});

export default GoalsChar;
