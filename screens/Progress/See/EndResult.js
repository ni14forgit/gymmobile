import React from "react";
import { View } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { setProgressTitle } from "../../../store/actions/progress";

const EndResult = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const activityTitle = route.params.title;
  const setTitle = () => {
    dispatch(setProgressTitle(activityTitle));
  };

  useFocusEffect(() => {
    setTitle();
  }, []);

  return <ModifiableText text="End Result" style={{ marginTop: 20 }} />;
};

export default EndResult;
