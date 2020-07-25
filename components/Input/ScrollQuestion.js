import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ColoredOption from "../Input/Basic/ColoredOption";
import { FontType } from "../../assets/Constants";
import ModifiableText from "../Text/ModifiableText";

const ScrollQuestion = (props) => {
  return (
    <View style={styles.container}>
      <ModifiableText
        size={FontType.question}
        family={FontType.medium}
        text={props.question}
      />
      <ScrollView
        style={styles.scrollparent}
        contentContainerStyle={styles.scrollcontainer}
      >
        {props.options.map((val, index) => {
          return <ColoredOption style={styles.optionspacing} text={val} />;
          // return <ModifiableText text={val} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "38%",
    // borderColor: "red",
    // borderWidth: 2,
  },
  scrollparent: {
    marginTop: "2%",
  },
  scrollcontainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionspacing: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
  decline: {
    maxWidth: "45%",
    marginTop: "2%",
  },
  //   rowContainer: {
  //     marginTop: "2%",
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //   },
});

export default ScrollQuestion;
