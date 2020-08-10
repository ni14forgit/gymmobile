import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import BasicQuestion from "../../../components/Input/BasicQuestion";
import SliderInput from "../../../components/Input/Basic/Slider";
import { Survey, Margin, Statements, Screens } from "../../../assets/Constants";
import QNavigator from "../../../components/Misc/QNavigator";

const GatherInfo = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.GOALSCHAR);
  };

  const [years, setYears] = useState(-1);
  const [timesaweek, setTimesaweek] = useState(-1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tophalf}>
        <View style={styles.basicquestion}>
          <BasicQuestion
            question={Survey.question.timesaweek}
            options={Survey.options.numbers7plus}
            ind={timesaweek}
            numPress={setTimesaweek}
          />
        </View>
        <View style={styles.basicquestion}>
          <BasicQuestion
            question={Survey.question.years}
            options={Survey.options.numbers5plus}
            ind={years}
            numPress={setYears}
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
      <QNavigator
        selected={0}
        numpages={5}
        textbuttontext={Statements.button.back}
        filledbuttontext={Statements.button.continue}
        nextScreenFunc={forward}
        // prevScreenFunc={}
        filledbuttonstyle={styles.filledbutton}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: Margin.left,
    marginRight: Margin.right,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  tophalf: {
    flex: 1,
    flexDirection: "column",
  },
  filledbutton: {
    // width: Dimension.button.continue.width,
    marginHorizontal: 20,
  },

  basicquestion: {
    flex: 4,
    justifyContent: "center",
  },
  slider: {
    justifyContent: "center",
    flex: 3,
  },
});

export default GatherInfo;
