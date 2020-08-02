import React from "react";
import { StyleSheet, View } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Titles } from "../../../assets/Constants/ProgressConstants";
import ScrollActivities from "../../models/Progress/ScrollActivities";
import { useDispatch } from "react-redux";
import { setBackButton } from "../../../store/actions/navigation";
import { useFocusEffect } from "@react-navigation/native";
import { setProgressTitle } from "../../../store/actions/progress";
const SeeActivities = (props) => {
  const forward = (activitytitle) => {
    props.navigation.navigate("subactivities", { title: activitytitle });
  };

  const dispatch = useDispatch();
  const setBackMenu = () => {
    dispatch(setBackButton(false));
  };
  useFocusEffect(() => {
    setBackMenu();
    dispatch(setProgressTitle("Progress"));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollActivities onPress={forward} title={Titles.see.activities} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SeeActivities;
