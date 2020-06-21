import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Text/Title";
import { Statements } from "../assets/Constants";
// import { RisingClimberURI } from "../assets/Image/Images";
import TitleImage from "../components/Image/TitleImage";
import OutlinedButton from "../components/Button/OutlinedButton";
import FilledButton from "../components/Button/FilledButton";

const Intro = (props) => {
  return (
    <View style={styles.container}>
      <Title title="Fitness is Your Community." />
      <TitleImage />
      <View style={styles.rowContainer}>
        <OutlinedButton text={Statements.button.login} />
        <FilledButton text={Statements.button.signup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    height: "100%",
    marginLeft: "10%",
    marginTop: "30%",
  },
  rowContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

export default Intro;
