import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import Nobuddies from "../../../assets/Image/nobuddies.png";

const NoMatches = () => {
  return (
    <View style={styles.container}>
      <View style={styles.lowcontainer}>
        <ModifiableText
          size={FontType.small}
          family={FontType.medium}
          text="No buddies yet!"
        />
        <Image source={Nobuddies} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lowcontainer: {
    height: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  container: {
    height: "100%",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },

  image: {
    width: "90%",
    maxHeight: "80%",
    // borderColor: "purple",
    // borderWidth: 4,
    flex: 1,
  },
});

export default NoMatches;
