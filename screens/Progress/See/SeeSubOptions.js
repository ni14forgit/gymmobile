import React from "react";
import { StyleSheet, View } from "react-native";
import AccordionList from "../../models/Progress/AccordionList";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Titles } from "../../../assets/Constants/ProgressConstants";

const SeeSubOptions = () => {
  return (
    <View style={styles.container}>
      <ModifiableText
        text="See sub options"
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

export default SeeSubOptions;
