import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { useDispatch } from "react-redux";
import { FontType } from "../../../assets/Constants";
import { useFocusEffect } from "@react-navigation/native";
import { setProgressTitle } from "../../../store/actions/progress";
import SliderInput from "../../../components/Input/Basic/Slider";
import {
  setBackButton,
  setBackFunction,
} from "../../../store/actions/navigation";
import { StackActions } from "@react-navigation/native";
import BasicQuestion from "../../../components/Input/BasicQuestion";
import FilledButton from "../../../components/Button/FilledButton";
const EndInput = ({ route, navigation }) => {
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
  const [sets, setSets] = useState(null);
  const [reps, setReps] = useState(null);

  useFocusEffect(() => {
    setBackMenu();
    setTitle();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ModifiableText
        text="today's exercise"
        family={FontType.regular}
        size={FontType.description}
        style={{ marginTop: 20, alignSelf: "center" }}
      />
      <View>
        <ModifiableText
          text="Weight on Last Set"
          family={FontType.medium}
          size={FontType.tabnavigator}
          style={styles.chartTitle}
        />
        <View style={styles.slider}>
          <SliderInput
            minval={45}
            maxval={250}
            question={""}
            disabled={false}
          />
        </View>
      </View>

      <View>
        <ModifiableText
          text="Number of Sets"
          family={FontType.medium}
          size={FontType.tabnavigator}
          style={styles.chartTitle}
        />
        <View style={styles.multiplechoice}>
          <BasicQuestion
            ind={sets}
            numPress={setSets}
            question={""}
            options={[1, 2, 3, 4, 5, 6, "7+"]}
          />
        </View>
      </View>

      <View>
        <ModifiableText
          text="Avg Number of Reps per Set"
          family={FontType.medium}
          size={FontType.tabnavigator}
          style={styles.chartTitle}
        />
        <View style={styles.multiplechoice}>
          <BasicQuestion
            ind={reps}
            numPress={setReps}
            question={""}
            options={[1, 2, 3, 4, 5, 6, "7+"]}
          />
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 30 }}>
        <FilledButton text="Submit" onPress={goBackPage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  slider: { marginTop: 35, marginLeft: "4%", alignSelf: "flex-start" },
  chartTitle: { marginTop: 20, marginLeft: "5%", alignSelf: "flex-start" },
  multiplechoice: { marginTop: 0, marginLeft: "5%", alignSelf: "flex-start" },
});

export default EndInput;
