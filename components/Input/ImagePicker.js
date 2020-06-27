import React, { useState } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import FilledButton from "./../Button/FilledButton";
import OutlinedButton from "./../Button/OutlinedButton";
import IconTemplate from "../../assets/IconTemplate";
import { FaceSVG } from "../../assets/Icons/MiscSVG";
import { Color, BorderRadius } from "../../assets/Constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImgPicker = () => {
  const [pc, setPc] = useState();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert("Grant camera permissions to take a profile pic!", [
        { text: "Okay" },
      ]);
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      // allowsEditing: true,
      aspect: [4, 16],
      quality: 0.5,
    });
    console.log(image);

    setPc(image.uri);
  };

  return (
    <View style={styles.centered}>
      <View style={styles.imagePreview}>
        {pc ? (
          <Image style={styles.image} source={{ uri: pc }} />
        ) : (
          <IconTemplate
            color={Color.blue}
            height="75%"
            width="75%"
            activityicon={FaceSVG}
          />
        )}
      </View>

      <View style={styles.rowContainer}>
        <OutlinedButton style={styles.center} text="Skip" />
        <FilledButton
          style={styles.center}
          onPress={takeImageHandler}
          text="Click"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ImgPicker;
