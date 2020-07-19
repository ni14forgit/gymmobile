import React from "react";
import { Image, StyleSheet, Dimensions, View } from "react-native";
import TrainerModal from "../../../assets/Image/trainermodal.jpg";
import TrainerNew from "../../../assets/Image/trainerimagenew.jpeg";
import { Color } from "../../../assets/Constants";
import { Video } from "expo-av";
import { Misc } from "../../../assets/Constants/TrainerConstants";

const BioVideo = ({ play }) => {
  return (
    <View>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={play}
        isLooping
        // style={{ width: 300, height: 300 }}
        style={styles.video}
      />
      <View style={styles.overlay} />
    </View>
  );
};

// Width should be based on the screen width
// Height should be width times some factor
// 0.9 for width factor?
// height = image width * 1.1

const styles = StyleSheet.create({
  video: {
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

export default BioVideo;
