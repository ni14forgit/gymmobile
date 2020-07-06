import React from "react";
import ModifiableText from "./ModifiableText";
import { FontType } from "../../assets/Constants";
import { StyleSheet } from "react-native";

const FlatlistTitle = (title) => {
  return (
    <ModifiableText
      text={title}
      family={FontType.medium}
      size={FontType.description}
      style={styles.title}
    />
  );
};

const styles = StyleSheet.create({
  title: { marginVertical: "6%", marginLeft: "2%" },
});

export default FlatlistTitle;
