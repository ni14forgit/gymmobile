import React from "react";
import { StyleSheet, View } from "react-native";
import AccordionList from "../../models/Progress/AccordionList";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
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

const TrackSubOptions = ({ navigation }) => {
  const dispatch = useDispatch();

  const setBackMenu = () => {
    dispatch(setBackButton(true));
    dispatch(setBackFunction(goBackPage));
  };

  const goBackPage = () => {
    // console.log("goBackPage");
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  useFocusEffect(() => {
    setBackMenu();
  }, []);
  return (
    <View style={styles.container}>
      <AccordionList title={Titles.track.options} DATA={ExampleTrackSee} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackSubOptions;
