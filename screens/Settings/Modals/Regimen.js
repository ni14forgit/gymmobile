import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Survey } from "../../../assets/Constants";
import BasicQuestion from "../../../components/Input/BasicQuestion";
import ConfigModal from "../../models/Settings/ConfigModal";

// this is where Regimen should handle it's own data, probably with Redux
const RegimenComponent = () => {
  const [weekSelection, setWeekSelection] = useState({
    decline: true,
    ind: -1,
  });

  const declineWeekPress = () => {
    setWeekSelection({ ...weekSelection, decline: true });
  };
  const numWeekPress = (index) => {
    setWeekSelection({ ind: index, decline: false });
  };

  const [yearSelection, setYearSelection] = useState({
    decline: false,
    ind: 2,
  });

  const declineYearPress = () => {
    setYearSelection({ ...yearSelection, decline: true });
  };
  const numYearPress = (index) => {
    setYearSelection({ ind: index, decline: false });
  };

  return (
    <View style={styles.container}>
      <BasicQuestion
        question={Survey.question.timesaweek}
        options={Survey.options.numbers7plus}
        numPress={numWeekPress}
        declinePress={declineWeekPress}
        decline={weekSelection.decline}
        ind={weekSelection.ind}
        style={{ marginBottom: 15 }}
      />
      <BasicQuestion
        question={Survey.question.years}
        options={Survey.options.numbers5plus}
        numPress={numYearPress}
        declinePress={declineYearPress}
        decline={yearSelection.decline}
        ind={yearSelection.ind}
      />
    </View>
  );
};

const Regimen = ({ isVisible, changeClose, xClose }) => {
  return (
    <ConfigModal
      MainComponent={RegimenComponent}
      isVisible={isVisible}
      changeClose={() => changeClose(true, "workoutregimen")}
      xClose={xClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "92%",

    // borderColor: "blue",
    // borderWidth: 2,
  },
});

export default Regimen;
