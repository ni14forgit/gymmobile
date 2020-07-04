import React from "react";
import { View, StyleSheet } from "react-native";
import ModifiableText from "../Text/ModifiableText";
import IconTemplate from "../../assets/IconTemplate";
import MainAccordionButton from "../Button/MainAccordionButton";
import { LegsSVG } from "../../assets/Icons/MiscSVG";
import { Dimensions } from "../../assets/Constants/ProgressConstants";
import { Color, FontType } from "../../assets/Constants";

const SubOptionCategory = ({ stretched, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.miniContainer}>
        <IconTemplate
          color={Color.blue}
          activityicon={LegsSVG}
          width={40}
          height={40}
        />
        <View style={styles.textWrapper}>
          <ModifiableText
            text="Legs"
            family={FontType.bold}
            size={FontType.small}
          />
          <ModifiableText
            text="Squats, Leg Press +3 more"
            family={FontType.regular}
            size={13}
          />
        </View>
      </View>
      <MainAccordionButton onPress={onPress} stretched={stretched} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    // borderColor: "#f4f4f6",
    borderColor: Color.grey,
    // height: Dimensions.suboptionitemheight,
    height: 90,
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
    // borderColor: "blue",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SubOptionCategory;
