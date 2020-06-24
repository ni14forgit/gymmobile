import React from "react";
import { StyleSheet, View } from "react-native";
import Decline from "./Basic/Decline";
import Times from "./Basic/Times";
import ModifiableText from "../Text/ModifiableText";
import { Survey, FontType } from "../../assets/Constants";

const BasicQuestion = (props) => {
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      // height: props.height,
      // borderColor: "black",
      // borderWidth: 4,
    },
    inputnum: {
      paddingRight: 8,
    },
    decline: {
      maxWidth: "45%",
      marginTop: "2%",
    },
    rowContainer: {
      marginTop: "2%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });

  return (
    <View style={[styles.container, props.style]}>
      <ModifiableText
        size={FontType.question}
        family={FontType.medium}
        text={props.question}
      />
      <View style={styles.rowContainer}>
        {props.options.map((num) => {
          return <Times text={num} style={styles.inputnum} selected={false} />;
        })}
        <Decline
          style={styles.decline}
          selected={false}
          text={Survey.options.decline}
        />
      </View>
    </View>
  );
};

export default BasicQuestion;
