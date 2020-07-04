import React from "react";
import { StyleSheet, View } from "react-native";
import AccordionList from "../../models/Progress/AccordionList";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Titles } from "../../../assets/Constants/ProgressConstants";

const TrackSubOptions = () => {
  return (
    <View style={styles.container}>
      <ModifiableText
        text="Track sub options"
        family={FontType.medium}
        size={FontType.description}
      />
      <AccordionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackSubOptions;
