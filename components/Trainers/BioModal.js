import React from "react";
import BioImage from "./Basic/BioImage";
import BioVideo from "./Basic/BioVideo";
import { View, StyleSheet } from "react-native";
import ModifiableText from "../../components/Text/ModifiableText";
import { FontSize } from "../../assets/Constants/TrainerConstants";
import { FontType, Color } from "../../assets/Constants";

// import BioVideo from "./Basic/BioVideo"

const BioModal = ({ data, index, play }) => {
  return (
    <View style={styles.container}>
      {/* <BioImage /> */}
      <BioVideo play={play} />

      {/* <View style={styles.textContainer}>
        <ModifiableText
          size={FontSize.biomodal}
          text="Hi"
          family={FontType.medium}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 5,
    // borderColor: "green",
    // borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  // textContainer: {
  //   borderColor: Color.blue,
  //   borderWidth: 2,
  //   padding: 10,
  //   width: 340,
  //   height: 80,
  //   borderBottomLeftRadius: 15,
  //   borderBottomRightRadius: 15,
  // },
});

export default BioModal;
