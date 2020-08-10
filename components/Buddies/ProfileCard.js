import React, { useState } from "react";
import ModifiableText from "../Text/ModifiableText";
import UserPic from "../Image/UserPic";
import UserPhoto from "../../assets/Image/appleselfie.jpg";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Color, FontType, TouchOpacity } from "../../assets/Constants";
import { TextSizes } from "../../assets/Constants/BuddyConstants";
import SmallFillButton from "../Button/SmallCard/SmallFillButton";
import SmallOutlineButton from "../Button/SmallCard/SmallOutlineButton";

const ProfileCard = ({
  photo,
  matchedon,
  name,
  similarities,
  style,
  onPress,
  negativeAction,
  positiveAction,
  positiveTitle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={TouchOpacity}
      onPress={onPress}
    >
      <UserPic userprofile={photo} />
      <View style={styles.description}>
        <View style={styles.toprow}>
          <View style={styles.nametitle}>
            <ModifiableText
              size={TextSizes.profilename}
              family={FontType.bold}
              text={name}
              numlines={1}
            />
          </View>
          <View style={styles.buttons}>
            <SmallOutlineButton onPress={negativeAction} text="No" />
            <SmallFillButton
              onPress={positiveAction}
              style={{ marginLeft: 6 }}
              text={positiveTitle}
            />
          </View>
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
            numlines={2}
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
    height: "90%",
    width: "70%",
    paddingLeft: "1%",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  toprow: {
    height: "35%",
    // borderColor: "blue",
    // borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomrow: {
    height: "65%",
    justifyContent: "space-evenly",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  nametitle: {
    width: "55%",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  buttons: {
    flexDirection: "row",
    // width: "45%",
    justifyContent: "flex-end",
    // borderColor: "blue",
    // borderWidth: 2,
  },
});

export default ProfileCard;
