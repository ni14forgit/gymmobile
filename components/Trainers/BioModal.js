import React from "react";
import BioImage from "./Basic/BioImage";
import BioVideo from "./Basic/BioVideo";
import { View, StyleSheet } from "react-native";
import ModifiableText from "../../components/Text/ModifiableText";
import { FontSize } from "../../assets/Constants/TrainerConstants";
import { FontType, Color } from "../../assets/Constants";

// import BioVideo from "./Basic/BioVideo"

const BioModal = ({ isImage, source, play }) => {
  return (
    <View style={styles.container}>
      {isImage ? <BioImage /> : <BioVideo play={play} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BioModal;
