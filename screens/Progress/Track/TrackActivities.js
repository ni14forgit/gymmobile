import React from "react";
import { StyleSheet, View } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Titles } from "../../../assets/Constants/ProgressConstants";
import ScrollActivities from "../../models/Progress/ScrollActivities";

const TrackActivities = () => {
  return (
    <View style={styles.container}>
      <ModifiableText
        text={Titles.track.activities}
        family={FontType.medium}
        size={FontType.description}
      />
      <ScrollActivities />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackActivities;
