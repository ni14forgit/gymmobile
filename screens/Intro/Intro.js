import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Title from "../../components/Text/Title";
import {
  Statements,
  Margin,
  Dimension,
  Color,
  Screens,
} from "../../assets/Constants";
import TitleImage from "../../components/Image/TitleImage";
import OutlinedButton from "../../components/Button/OutlinedButton";
import FilledButton from "../../components/Button/FilledButton";

const Intro = (props) => {
  const forward = () => {
    props.navigation.navigate(Screens.SUPPORTSYSTEM);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title title={Statements.title.main} />
      <TitleImage />
      <View style={styles.rowContainer}>
        <OutlinedButton text={Statements.button.login} />
        <FilledButton onPress={forward} text={Statements.button.signup} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // base: {
  //   flex: 1,
  //   // backgroundColor: Color.background,
  //   // borderColor: "red",
  //   // borderWidth: 2,
  // },

  container: {
    justifyContent: "space-evenly",
    flexDirection: "column",
    // alignItems: "flex-end",
    // flex: 1,
    position: "absolute",
    bottom: 0,
    // borderColor: "blue",
    // borderWidth: 2,
    height: "90%",
    marginLeft: Margin.IntroPage.left,
  },
  rowContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    // borderColor: "blue",
    // borderWidth: 2,
    // height: Dimension.introButton.height,
    flexDirection: "row",
    width: "78%",
  },
});

export default Intro;
