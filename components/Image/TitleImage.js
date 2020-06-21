import React from "react";
import { StyleSheet, Image, View } from "react-native";

const TitleImage = (props) => {
  return (
    <Image
      source={require("../../assets/Image/marginalia-done.png")}
      style={styles.image}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "60%",
    // borderColor: "black",
    // borderWidth: 3,
  },
});

export default TitleImage;
