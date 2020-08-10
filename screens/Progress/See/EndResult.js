import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { useDispatch } from "react-redux";
import { FontType } from "../../../assets/Constants";
import { useFocusEffect } from "@react-navigation/native";
import { setProgressTitle } from "../../../store/actions/progress";
import LineGraph from "../../../components/Progress/ViewResults/LineGraph";
import BarGraph from "../../../components/Progress/ViewResults/BarGraph";
import {
  setBackButton,
  setBackFunction,
} from "../../../store/actions/navigation";
import { StackActions } from "@react-navigation/native";
const EndResult = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const activityTitle = route.params.title;
  const setTitle = () => {
    dispatch(setProgressTitle(activityTitle));
  };
  const setBackMenu = () => {
    dispatch(setBackButton(true));
    dispatch(setBackFunction(goBackPage));
  };
  const goBackPage = () => {
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  useFocusEffect(() => {
    setBackMenu();
    setTitle();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ModifiableText
        text="this week"
        family={FontType.regular}
        size={FontType.description}
        style={{ marginTop: 20 }}
      />
      <ModifiableText
        text="Weight on Last Set"
        family={FontType.medium}
        size={FontType.tabnavigator}
        style={styles.chartTitle}
      />
      <LineGraph isBezier={true} data={[70, 75, 70, 68, 70, 76, 80, 78]} />
      <ModifiableText
        text="Number of Sets"
        family={FontType.medium}
        size={FontType.tabnavigator}
        style={styles.chartTitle}
      />
      {/* <LineGraph data={[4, 4, 4, 4, 4, 4, 4, 4]} /> */}
      <BarGraph data={[5, 5, 2, 5, 5, 4, 5]} />
      <ModifiableText
        text="Avg Number of Reps per Set"
        family={FontType.medium}
        size={FontType.tabnavigator}
        style={styles.chartTitle}
      />
      <BarGraph data={[6, 7, 10, 7, 7, 8, 6]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  chartTitle: { marginTop: 20, marginLeft: "5%", alignSelf: "flex-start" },
});

export default EndResult;
