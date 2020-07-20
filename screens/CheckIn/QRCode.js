import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import ModifiableText from "../../components/Text/ModifiableText";
import QRImage from "../../assets/Image/qrcode.png";
import { FontType } from "../../assets/Constants";
import DoneModal from "./DoneModal";
import FilledButton from ".././../components/Button/FilledButton";

const QRCode = () => {
  const [date, setDate] = useState("");
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const generateDate = () => {
    const today = new Date();
    var dateString = "";
    var monthString = "";
    if (today.getDate() < 10) {
      dateString = "0" + today.getDate();
    } else {
      dateString = "" + today.getDate();
    }
    if (today.getMonth() + 1 < 10) {
      monthString = "0" + (today.getMonth() + 1);
    } else {
      monthString = "" + (today.getMonth() + 1);
    }
    const newdate =
      "" + monthString + " " + dateString + " " + today.getFullYear();
    return newdate;
  };

  useEffect(() => {
    setDate(generateDate());
  }, []);
  return (
    <View style={styles.container}>
      <DoneModal visible={visible} date={date} toggle={toggle} />
      <View style={styles.innercontainer}>
        <ModifiableText
          family={FontType.medium}
          text="Scan this QR Code at the kiosk to check in for the day!"
          size={FontType.description}
          style={{ textAlign: "center", maxWidth: "85%" }}
        />
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={QRImage}
        ></Image>
        <FilledButton onPress={toggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
    height: "100%",
  },
  innercontainer: {
    // justifyContent: "center",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
    height: "85%",
  },
  image: {
    width: 350,
    height: 350,
    // borderColor: "purple",
    // borderWidth: 2,
  },
});

export default QRCode;
