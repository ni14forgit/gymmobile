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
import FilledButton from "../../../components/Button/FilledButton";
import OutlinedButton from "../../../components/Button/OutlinedButton";
import IconTemplate from "../../../assets/IconTemplate";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.xbutton}>
              <Xbutton
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <View style={styles.main}>
              <ModifiableText
                family={FontType.medium}
                size={FontType.question}
                text="Hi there"
              />
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    borderColor: "green",
    borderWidth: 2,
  },
  modalView: {
    height: "80%",
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
    borderColor: "blue",
    borderWidth: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "space-around",
    height: "80%",
    width: "100%",
    borderColor: "purple",
    borderWidth: 2,
    alignItems: "center",
  },
  xbutton: {
    position: "absolute",
    top: 20,
    right: 20,
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

export default ModalScreen;
