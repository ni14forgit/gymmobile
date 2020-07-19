import React, { useState } from "react";
import ModifiableText from "../Text/ModifiableText";
import UserPic from "../Image/UserPic";
import UserPhoto from "../../assets/Image/appleselfie.jpg";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontType, TouchOpacity } from "../../assets/Constants";
import { TextSizes } from "../../assets/Constants/BuddyConstants";
import FilledButton from "../Button/FilledButton";
import SmallFillButton from "../Button/SmallCard/SmallFillButton";

const TrainerCard = ({ name, style, email, specialties, myBioOnPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={TouchOpacity}
      style={[styles.container, style]}
      // onPress={() => onPress(name, email, specialties)}
    >
      <UserPic userprofile={UserPhoto} />
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
            family={FontType.medium}
            text={email}
            numlines={1}
          />
        </View>
        <View style={styles.bottomrow}>
          <ModifiableText
            size={TextSizes.profilecontactinfo}
            family={FontType.regular}
            text={specialties}
            numlines={1}
          />
          {/* <FilledButton text="More about Joe" /> */}
          <View style={styles.buttons}>
            <SmallFillButton text="My Bio" onPress={myBioOnPress} />
            <SmallFillButton text="Let's Meet!" style={{ marginLeft: 5 }} />
          </View>
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
    height: "40%",
    // borderColor: "blue",
    // borderWidth: 2,
    // flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  bottomrow: {
    height: "60%",
    justifyContent: "space-around",
    // alignItems: "center",
    // borderColor: "blue",
    // borderWidth: 2,
  },

  buttons: {
    flexDirection: "row",
    // width: "40%",
    // justifyContent: "space-evenly",
    // borderColor: "blue",
    // borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    // flex: 1,
  },
  overflow: {},
  indbutton: {},
});

export default TrainerCard;
