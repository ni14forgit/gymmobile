import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import FilledButton from "../components/Button/FilledButton";
import { Color, FontType, Statements, Margin } from "./../assets/Constants";
import TextButton from "../components/Button/TextButton";
import SpiritTitle from "../components/Text/SpiritTitle";

const Spirit = (props) => {
  const styles = StyleSheet.create({
    outer: {
      flex: 1,
    },
    container: {
      flexDirection: "column",
      flex: 1,
      justifyContent: "flex-start",
      // alignItems: "center",
      paddingTop: "20%",
    },
    image: {
      width: "90%",
      height: "50%",
      alignSelf: "center",
      marginVertical: "10%",
    },
    text: {
      width: "90%",
      alignSelf: "center",
      marginBottom: "10%",
    },
    rowContainer: {
      flex: 1,
      position: "absolute",
      bottom: Margin.buttonBottom,
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: props.back ? "space-around" : "center",
    },
    textButton: {
      marginTop: 12,
      marginRight: "35%",
    },
  });

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <Image source={props.image} style={styles.image} resizeMode="contain" />
        <SpiritTitle style={styles.text} text={props.text} />
      </View>
      <View style={styles.rowContainer}>
        {props.back ? (
          <TextButton style={styles.textButton} text={Statements.button.back} />
        ) : null}
        <FilledButton style={styles.filledbutton} text="Continue" />
      </View>
    </View>
  );
};

export default Spirit;
