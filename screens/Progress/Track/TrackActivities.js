import React from "react";
import { StyleSheet, View } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Titles } from "../../../assets/Constants/ProgressConstants";
import ScrollActivities from "../../models/Progress/ScrollActivities";
import { useDispatch } from "react-redux";
import { setBackButton } from "../../../store/actions/navigation";
import { useFocusEffect } from "@react-navigation/native";
const TrackActivities = (props) => {
  const forward = () => {
    props.navigation.navigate("subactivities");
  };

  const dispatch = useDispatch();
  const setBackMenu = () => {
    dispatch(setBackButton(false));
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
