import React from "react";
import { View, StyleSheet } from "react-native";
import { Color, FontType } from "../../assets/Constants";
import MenuButton from "../Button/MenuButton";
import ModifiableText from "../Text/ModifiableText";

const TopHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <MenuButton />
      </View>
      <View style={styles.right}>
        <MenuButton />
      </View>
      <View style={styles.center}>
        <ModifiableText
          text={props.title}
          size={FontType.description}
          family={FontType.bold}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 3,
    backgroundColor: "white",
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    borderTopWidth: 0,

    height: 55,
    width: "100%",
  },
  right: {
    position: "absolute",
    right: 15,
    // bottom: 19,
  },
  center: {
    alignSelf: "center",
  },
});

export default TopHeader;
