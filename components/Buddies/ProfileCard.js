import React from "react";
import ModifiableText from "../Text/ModifiableText";
import UserPic from "../Image/UserPic";
import UserPhoto from "../../assets/Image/appleselfie.jpg";
import { View, StyleSheet } from "react-native";
import { Color, FontType } from "../../assets/Constants";
import SmallFillButton from "../Buddies/SmallFillButton";
import SmallOutlineButton from "../Buddies/SmallOutlineButton";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <UserPic userprofile={UserPhoto} />
      <View style={styles.description}>
        <View style={styles.toprow}>
          <ModifiableText
            size={FontType.small}
            family={FontType.bold}
            text="Joe Iyengar"
          />
          <View style={styles.buttons}>
            {/* <OutlinedButton style={styles.indbutton} text="No" /> */}
            <SmallOutlineButton text="No" />
            <SmallFillButton text="Yes" />
          </View>
        </View>
        <View style={styles.bottomrow}>
          <ModifiableText
            size={15}
            family={FontType.bold}
            text="Matched on Yoga, Running"
          />
          <ModifiableText
            size={15}
            family={FontType.regular}
            text="Similar Interests: mental health, healty body-fat percentage, hardworking"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 2,
    shadowColor: Color.black,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    height: 130,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: Color.white,
  },
  description: {
    height: "90%",
    width: "75%",
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
    // justifyContent: "center",
    borderColor: "blue",
    borderWidth: 2,
  },
  buttons: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-evenly",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  indbutton: {},
});

export default ProfileCard;
