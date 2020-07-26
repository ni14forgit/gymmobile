import React from "react";
import { StyleSheet, View } from "react-native";
import { Titles } from "../../../assets/Constants/ProgressConstants";
import ScrollActivities from "../../models/Progress/ScrollActivities";
import { useDispatch } from "react-redux";
import { setBackButton } from "../../../store/actions/navigation";
import { setProgressTitle } from "../../../store/actions/progress";
import { useFocusEffect } from "@react-navigation/native";
const TrackActivities = (props) => {
  const forward = (activitytitle) => {
    props.navigation.navigate("subactivities", { title: activitytitle });
    // console.log(title);
  };

  const dispatch = useDispatch();
  const setBackMenu = () => {
    dispatch(setBackButton(false));
    dispatch(setProgressTitle("Progress"));
  };
  useFocusEffect(() => {
    setBackMenu();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollActivities title={Titles.track.activities} onPress={forward} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackActivities;
