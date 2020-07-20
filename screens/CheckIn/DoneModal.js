import React from "react";
import { Alert, Modal, StyleSheet, View, Image } from "react-native";
import { Color, FontType } from "../../assets/Constants";
import Xbutton from "../../components/Button/Xbutton";
import ModifiableText from "../../components/Text/ModifiableText";
import FilledButton from "../../components/Button/FilledButton";
import CheckInImage from "../../assets/Image/checkin.png";

const ModalScreen = (props) => {
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
                family={FontType.bold}
                size={FontType.question}
                text={"Congrats!"}
                style={styles.centerText}
              />
              <View style={styles.dates}>
                <ModifiableText
                  family={FontType.medium}
                  size={FontType.small}
                  text={"You've checked in for"}
                />
                <ModifiableText
                  family={FontType.medium}
                  size={FontType.small}
                  text={props.date}
                />
              </View>
              {/* <IconTemplate
                color={Color.badgrey}
                activityicon={props.icon}
                height="50%"
                width="50%"
              /> */}
              <Image source={CheckInImage} style={styles.image} />
              <View style={styles.buttoncontainer}>
                <FilledButton text="Close" onPress={props.toggle} />
              </View>
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
  image: {
    height: "70%",
    width: "100%",
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
    // borderColor: "blue",
    // borderWidth: 1,
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
    width: "90%",
    // marginBottom: 10,
  },
  dates: {
    // textAlign: "center",
    alignItems: "center",
    // marginBottom: 10,
  },
  main: {
    justifyContent: "space-evenly",
    // height: "90%",
    marginTop: 20,
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

export default ModalScreen;
