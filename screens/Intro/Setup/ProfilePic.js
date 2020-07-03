import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import QNavigator from "../../../components/Misc/QNavigator";

import ModifiableText from "../../../components/Text/ModifiableText";

import {
  FontType,
  Statements,
  Color,
  BorderRadius,
  Screens,
} from "../../../assets/Constants";

import ImgagePicker from "../../../components/Input/ImagePicker";

const ProfilePic = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.ACCOUNT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ModifiableText
        size={FontType.question}
        family={FontType.medium}
        text="Set a Profile Picture!"
        style={styles.titlequestion}
      />
      <View style={styles.centered}>
        <ImgagePicker />
      </View>

      <QNavigator
        selected={0}
        numpages={4}
        textbuttontext={Statements.button.back}
        filledbuttontext={Statements.button.continue}
        nextScreenFunc={forward}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  titlequestion: {
    marginTop: "8%",
    // borderColor: "red",
    // borderWidth: 2,
  },

  centered: {
    // alignItems: "center",
    alignSelf: "center",
    width: "100%",
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  imagePreview: {
    height: "65%",
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

    borderColor: Color.blue,
    // marginBottom: "20%",
    // alignSelf: "center",
    borderWidth: 4,
    borderRadius: BorderRadius.profilepic.container,
  },
  rowContainer: {
    // borderColor: "red",
    // borderWidth: 5,
    // paddingTop: "35%",

    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  image: {
    borderRadius: BorderRadius.profilepic.image,
    height: "100%",
    width: "100%",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  center: {
    alignSelf: "center",
  },
});

export default ProfilePic;
