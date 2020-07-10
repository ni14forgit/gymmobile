import React from "react";
import { StyleSheet, Image } from "react-native";

const UserPic = ({ userprofile }) => {
  return <Image source={userprofile} style={styles.image} />;
};

const height = 110;
const width = height / 1.35;
const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    borderRadius: 8,
    // borderColor: "blue",
    // borderWidth: 2,
  },
});

export default UserPic;
