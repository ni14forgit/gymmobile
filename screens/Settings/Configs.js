import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import ModifiableText from "../../components/Text/ModifiableText";
import { FontType, Color } from "../../assets/Constants";
import FilledButton from "../../components/Button/FilledButton";
import OutlinedButton from "../../components/Button/OutlinedButton";
import Toast from "react-native-easy-toast";
import {
  Regimen,
  Goals,
  Characteristics,
  MatchStatus,
  Password,
  Photo,
} from "./SettingsModal";

const Configs = () => {
  const [visible, setVisible] = useState({
    workoutregimen: false,
    goals: false,
    characteristics: false,
    matchstatus: false,
    password: false,
    photo: false,
  });

  const toastRef = useRef(null);

  const mainToggle = (item) => {
    setVisible({ ...visible, [item]: !visible[item] });
  };

  const xClose = (item) => {
    setVisible({ ...visible, [item]: !visible[item] });
    showToast("No changes made!");
  };

  const changeClose = (didUserMakeChange, item) => {
    // before calling function, user should check if change was made
    // based on that, that toast message will be different
    // pass a function instead to call
    setVisible({ ...visible, [item]: !visible[item] });
    if (didUserMakeChange) {
      showToast("Applied changes to your profile!");
    } else {
      showToast("No change recognized!");
    }
  };

  const showToast = (text) => {
    toastRef.current.show(text, 3000);
  };

  return (
    <View style={styles.container}>
      <Toast
        ref={toastRef}
        style={{ backgroundColor: Color.grey, opacity: 0.8, borderRadius: 5 }}
        position="top"
        positionValue={0}
        fadeInDuration={500}
        fadeOutDuration={500}
        opacity={0.8}
        textStyle={{
          color: Color.blue,
          fontFamily: FontType.medium,
          fontSize: FontType.small,
        }}
      />

      <Regimen
        isVisible={visible.workoutregimen}
        xClose={() => xClose("workoutregimen")}
        changeClose={changeClose}
      />
      <Goals
        isVisible={visible.goals}
        xClose={() => xClose("goals")}
        changeClose={changeClose}
      />
      <Characteristics
        xClose={() => xClose("characteristics")}
        isVisible={visible.characteristics}
        changeClose={changeClose}
      />
      <MatchStatus
        isVisible={visible.matchstatus}
        xClose={() => xClose("matchstatus")}
        changeClose={changeClose}
      />
      <Password
        isVisible={visible.password}
        xClose={() => xClose("password")}
        changeClose={changeClose}
      />
      <Photo
        isVisible={visible.photo}
        xClose={() => xClose("photo")}
        changeClose={changeClose}
      />

      <View style={styles.main}>
        <View style={styles.group}>
          <ModifiableText
            text="Edit Fitness Information"
            family={FontType.medium}
            size={FontType.description}
            style={{ marginBottom: 10 }}
          />
          <View style={styles.buttons}>
            <FilledButton
              text="Workout Regimen"
              style={styles.innerButton}
              onPress={() => mainToggle("workoutregimen")}
            />
            <FilledButton
              text="Goals"
              style={styles.innerButton}
              onPress={() => mainToggle("goals")}
            />
            <FilledButton
              text="Characteristics"
              style={styles.innerButton}
              onPress={() => mainToggle("characteristics")}
            />
            <FilledButton
              text="Match Status"
              style={styles.innerButton}
              onPress={() => mainToggle("matchstatus")}
            />
          </View>
        </View>
        <View style={styles.group}>
          <ModifiableText
            text="Edit Profile Information"
            family={FontType.medium}
            size={FontType.description}
            style={{ marginBottom: 10 }}
          />
          <View style={styles.buttons}>
            {/* <FilledButton text="Email" style={styles.innerButton} /> */}
            <FilledButton
              text="Password"
              style={styles.innerButton}
              onPress={() => mainToggle("password")}
            />
            <FilledButton
              text="Photo"
              style={styles.innerButton}
              onPress={() => mainToggle("photo")}
            />
          </View>
        </View>
        <View style={styles.logout}>
          <OutlinedButton text="Log Out" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // width: "90%",
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
  },
  main: {
    height: "80%",
    justifyContent: "space-evenly",
    // borderColor: "red",
    // borderWidth: 2,
  },
  group: {
    marginLeft: 40,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  innerButton: {
    marginRight: 8,
    marginVertical: 4,
  },
  logout: {
    alignItems: "center",
  },
});

export default Configs;
