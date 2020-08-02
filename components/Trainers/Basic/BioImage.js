import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import TrainerNew from "../../../assets/Image/trainerimagenew.jpeg";
import { Color } from "../../../assets/Constants";
import { Misc } from "../../../assets/Constants/TrainerConstants";

const BioImage = ({}) => {
  return (
    <View>
      <Image source={TrainerNew} style={styles.image} />
      <View style={styles.overlay} />
    </View>
  );
};

// Width should be based on the screen width
// Height should be width times some factor
// 0.9 for width factor?
// height = image width * 1.1

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").width * 0.82 * 1.1,
    width: Dimensions.get("window").width * 0.82,
    borderRadius: 15,
    // ...StyleSheet.absoluteFillObject,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    // borderColor: "red",
    // borderWidth: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: "rgba(0,0,0,0.5)",
    backgroundColor: Color.blue,
    opacity: Misc.trainermodalopacity,
    borderRadius: 15,
  },
});

export default BioImage;
