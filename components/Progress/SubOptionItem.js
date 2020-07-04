import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import ModifiableText from "../Text/ModifiableText";
import { Dimensions } from "../../assets/Constants/ProgressConstants";
import { Color, FontType } from "../../assets/Constants";
import SubMoreButton from "../Button/SubMoreButton";

const SubOptionItem = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ModifiableText
          text="Legs"
          family={FontType.medium}
          size={FontType.small}
        />
        <SubMoreButton />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: "12%",
    //MainAccordianButton is 20 pix wider than the arrow, need to make this more standard
    paddingRight: 16 + 20 / 2,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    // borderColor: "#f4f4f6",
    borderColor: Color.grey,
    height: Dimensions.suboptionitemheight,
  },
  textWrapper: {
    width: "75%",
    // borderColor: "red",
    // borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  miniContainer: {
    flexDirection: "row",
    width: "75%",
    borderColor: "blue",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SubOptionItem;
