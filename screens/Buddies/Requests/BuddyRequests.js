import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BuddyList from "../../models/Buddies/BuddyList";
import ProfileModal from "../../models/Buddies/ProfileModal";
import {
  RequestProfiles,
  Titles,
} from "../../../assets/Constants/BuddyConstants";

const BuddyRequests = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [matchedon, setMatchedOn] = useState("");
  const [similarities, setSimilarities] = useState("");

  const toggleState = () => {
    setModalVisible(!modalVisible);
  };

  const viewProfile = (namearg, similaritiesarg, matchedonarg) => {
    setName(namearg);
    setSimilarities(similaritiesarg);
    setMatchedOn(matchedonarg);
    toggleState();
  };

  return (
    <View>
      <ProfileModal
        name={name}
        matchedon={matchedon}
        similarities={similarities}
        visible={modalVisible}
        toggle={toggleState}
      />

      <BuddyList
        title={Titles.requests}
        DATA={RequestProfiles}
        onPress={viewProfile}
        isFinder={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginBottom: 10,
  },
});

export default BuddyRequests;
