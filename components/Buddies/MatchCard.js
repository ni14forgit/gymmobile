import React, { useState } from "react";
import ModifiableText from "../Text/ModifiableText";
import UserPic from "../Image/UserPic";
import UserPhoto from "../../assets/Image/appleselfie.jpg";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontType, TouchOpacity } from "../../assets/Constants";
import { TextSizes } from "../../assets/Constants/BuddyConstants";

const MatchCard = ({
  matchedon,
  name,
  similarities,
  style,
  phone,
  email,
  onPress,
  photo,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={TouchOpacity}
      style={[styles.container, style]}
      onPress={() => onPress(name, email, phone, similarities, matchedon)}
    >
      <UserPic userprofile={photo} />
      <View style={styles.description}>
        <View style={styles.toprow}>
          <ModifiableText
            size={TextSizes.profilename}
            family={FontType.bold}
            text={name}
            numlines={1}
          />
          <ModifiableText
            size={TextSizes.profilecontactinfo}
            family={FontType.regular}
            text={email}
            numlines={1}
          />
          <ModifiableText
            size={TextSizes.profilecontactinfo}
            family={FontType.regular}
            text={phone}
            numlines={1}
          />
        </View>
        <View style={styles.bottomrow}>
          <ModifiableText
            size={TextSizes.profiledescription}
            family={FontType.bold}
            text={matchedon}
            numlines={1}
          />
          <ModifiableText
            size={TextSizes.profiledescription}
            family={FontType.regular}
            text={similarities}
            numlines={1}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 2,
    shadowColor: Color.black,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    height: 140,
    width: "92%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Color.white,
  },
  description: {
    height: "80%",
    width: "70%",
    paddingLeft: "3%",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  toprow: {
    height: "50%",
    // borderColor: "blue",
    // borderWidth: 2,
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  bottomrow: {
    height: "50%",
    justifyContent: "flex-end",
    // borderColor: "blue",
    // borderWidth: 2,
  },

  buttons: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-evenly",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  overflow: {},
  indbutton: {},
});

export default MatchCard;
