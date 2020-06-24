import React from "react";
import { StyleSheet, View } from "react-native";
import DotsTracker from "./Basic/DotsTracker";
import FilledButton from "../Button/FilledButton";
import TextButton from "../Button/TextButton";
import { Dimension } from "../../assets/Constants";

const QNavigator = (props) => {
  return (
    <View style={styles.bottom}>
      <DotsTracker selected={props.selected} num={props.numpages} />
      <View style={styles.bottomRowContainer}>
        <TextButton style={props.textbuttonstyle} text={props.textbuttontext} />
        <FilledButton
          style={props.filledbuttonstyle}
          text={props.filledbuttontext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    height: Dimension.qnavigator.height,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  bottomRowContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    width: Dimension.qnavigator.width,
    justifyContent: "space-between",
  },
});

export default QNavigator;
