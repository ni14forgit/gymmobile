import React from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import FilledButton from "../../components/Button/FilledButton";
import {
  Color,
  FontType,
  Statements,
  Margin,
  Dimension,
} from "../../assets/Constants";
import TextButton from "../../components/Button/TextButton";
import SpiritTitle from "../../components/Text/SpiritTitle";

const Spirit = (props) => {
  const styles = StyleSheet.create({
    outer: {
      flex: 1,
    },
    container: {
      flexDirection: "column",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
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
    },
    rowContainer: {
      justifyContent: props.back ? "space-between" : "center",
      alignSelf: "center",
      alignItems: "center",
      // borderColor: "blue",
      // borderWidth: 2,
      flexDirection: "row",
      width: "80%",
    },
    bottom: {
      height: Dimension.introButton.height,
      // borderColor: "blue",
      // borderWidth: 2,
    },
  });

  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.container}>
        <Image source={props.image} style={styles.image} resizeMode="contain" />
        <SpiritTitle style={styles.text} text={props.text} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.rowContainer}>
          {props.back ? <TextButton text={Statements.button.back} /> : null}
          <FilledButton text="Continue" onPress={props.forward} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Spirit;
