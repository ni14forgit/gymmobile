import React from "react";
import { View, StyleSheet } from "react-native";
import { Color, FontType } from "../assets/Constants";
import MenuButton from "../components/Button/MenuButton";
import BackButton from "../components/Button/BackButton";
import ModifiableText from "../components/Text/ModifiableText";

const TopHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.backButtonExists ? (
        <View style={styles.left}>
          <BackButton onPress={props.backButtonFunction} />
        </View>
      ) : null}
      <View style={styles.right}>
        <MenuButton onPress={props.onPressDrawer} />
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
    // shadowColor: Color.black,
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.1,
    // borderTopWidth: 0,
    // borderBottomWidth: 2,

    height: 55,
    width: "100%",
  },
  right: {
    position: "absolute",
    right: 15,
  },
  left: {
    position: "absolute",
    left: 15,
  },
  center: {
    alignSelf: "center",
  },
});

export default TopHeader;
