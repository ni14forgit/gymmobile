import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MatchList from "../../models/Buddies/MatchList";
import MatchModal from "../../models/Buddies/MatchModal";
import {
  MatchProfiles,
  Titles,
} from "../../../assets/Constants/BuddyConstants";

const BuddyMatches = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [matchedon, setMatchedOn] = useState("");
  const [similarities, setSimilarities] = useState("");

  const toggleState = () => {
    setModalVisible(!modalVisible);
  };

  const viewProfile = (
    namearg,
    email,
    phone,
    similaritiesarg,
    matchedonarg
  ) => {
    setName(namearg);
    setEmail(email);
    setPhone(phone);
    setSimilarities(similaritiesarg);
    setMatchedOn(matchedonarg);
    toggleState();
  };

  return (
    <View>
      <MatchModal
        name={name}
        phone={phone}
        email={email}
        matchedon={matchedon}
        similarities={similarities}
        visible={modalVisible}
        toggle={toggleState}
      />

      <MatchList
        title={Titles.buddies.yesmatches}
        DATA={MatchProfiles}
        onPress={viewProfile}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   flexDirection: "column",
//   // },
//   innerhalf: {
//     height: "50%",
//     width: "100%",
//     // flex: 1,
//   },
//   profile: {
//     marginBottom: 10,
//   },
// });

export default BuddyMatches;
