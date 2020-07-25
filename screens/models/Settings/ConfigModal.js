import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Xbutton from "../../../components/Button/Xbutton";
import Modal from "react-native-modal";
import { FontType, Color } from "../../../assets/Constants";
import FilledButton from "../../../components/Button/FilledButton";

const ConfigModal = ({ MainComponent, isVisible, changeClose, xClose }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.xbutton}>
          <Xbutton onPress={xClose} />
        </View>
        <View style={styles.main}>
          <MainComponent />
          <FilledButton
            text="Change"
            onPress={changeClose}
            style={{ marginVertical: 20 }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: 15,
    // height: "50%",
    justifyContent: "center",
  },
  xbutton: {
    position: "absolute",
    top: 20,
    right: 20,
    // height: 20,
  },
  main: {
    marginTop: 50,
    alignItems: "center",
    // height: "100%",
    // flex: 1,
    justifyContent: "space-evenly",
    // borderColor: "purple",
    // borderWidth: 2,
  },
});

export default ConfigModal;
