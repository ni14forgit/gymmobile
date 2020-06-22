import React from "react";
import { StyleSheet, View } from "react-native";
import Decline from "./Basic/Decline";
import Times from "./Basic/Times";
import ModifiableText from "../Text/ModifiableText";
import { Survey } from "../../assets/Constants";

const BasicQuestion = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      height: props.height,
    },
    inputnum: {
      paddingRight: 8,
    },
    decline: {
      maxWidth: "45%",
      marginTop: "1%",
    },
    rowContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });

  return (
    <View style={styles.container}>
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
