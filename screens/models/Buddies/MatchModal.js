import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Color, FontType } from "../../../assets/Constants";
import Xbutton from "../../../components/Button/Xbutton";
import ModifiableText from "../../../components/Text/ModifiableText";

const MatchModal = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.xbutton}>
              <Xbutton onPress={props.toggle} />
            </View>
            <View style={styles.main}>
              <ModifiableText
                family={FontType.medium}
                size={FontType.question}
                text={props.name}
                style={styles.centerText}
              />
              <ModifiableText
                family={FontType.medium}
                size={FontType.reallysmall}
                text={props.matchedon}
                style={styles.centerText}
              />
              <ModifiableText
                family={FontType.medium}
                size={FontType.reallysmall}
                text={props.similarities}
                style={styles.centerText}
              />
              <ModifiableText
                family={FontType.medium}
                size={FontType.reallysmall}
                text={props.email}
                style={styles.centerText}
              />
              <ModifiableText
                family={FontType.medium}
                size={FontType.reallysmall}
                text={props.phone}
                style={styles.centerText}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    // borderColor: "green",
    // borderWidth: 2,
  },
  modalView: {
    height: "60%",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // borderColor: "blue",
    // borderWidth: 1,
    // justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
    width: "90%",
  },
  main: {
    marginTop: "10%",
    justifyContent: "space-evenly",
    height: 260,
    width: "100%",
    // borderColor: "purple",
    // borderWidth: 2,
    alignItems: "center",
  },
  xbutton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // borderColor: "red",
    // borderWidth: 2,
    width: "80%",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default MatchModal;
