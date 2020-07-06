import React from "react";
import { StyleSheet, View } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Titles } from "../../../assets/Constants/ProgressConstants";
import ScrollActivities from "../../models/Progress/ScrollActivities";

const TrackActivities = (props) => {
  const forward = () => {
    props.navigation.navigate("subactivities");
  };

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
