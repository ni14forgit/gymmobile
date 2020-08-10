import React from "react";
import { StyleSheet, View } from "react-native";
import AccordionList from "../../models/Progress/AccordionList";
import {
  Titles,
  Margin,
  ExampleTrackSee,
} from "../../../assets/Constants/ProgressConstants";
import { useDispatch } from "react-redux";
import {
  setBackButton,
  setBackFunction,
} from "../../../store/actions/navigation";
import { useFocusEffect } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { setProgressTitle } from "../../../store/actions/progress";

const TrackSubOptions = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const activityTitle = route.params.title;

  const setBackMenu = () => {
    dispatch(setBackButton(true));
    dispatch(setBackFunction(goBackPage));
  };

  const forward = (activitytitle) => {
    navigation.navigate("endinput", { title: activitytitle });
  };

  const setTitle = () => {
    dispatch(setProgressTitle(activityTitle));
  };

  const goBackPage = () => {
    // console.log("goBackPage");
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  useFocusEffect(() => {
    setTitle();
    setBackMenu();
  }, []);
  return (
    <View style={styles.container}>
      <AccordionList
        title={Titles.track.options}
        DATA={ExampleTrackSee}
        forward={forward}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackSubOptions;
