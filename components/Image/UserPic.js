import React from "react";
import { StyleSheet, Image } from "react-native";

const UserPic = ({ userprofile }) => {
  return <Image source={userprofile} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 76,
    height: 102,
    borderRadius: 8,
    // borderColor: "blue",
    // borderWidth: 2,
  },
});

export default UserPic;
