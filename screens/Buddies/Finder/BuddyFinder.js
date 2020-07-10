import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BuddyList from "../../models/Buddies/BuddyList";
import ProfileModal from "../../models/Buddies/ProfileModal";
import {
  ExampleProfiles,
  Titles,
  ExampleMatchActivityData,
} from "../../../assets/Constants/BuddyConstants";
import MatchActivityList from "../../../components/Buddies/MatchActivityList";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";

const Header = (title) => {
  return (
    <ModifiableText
      text={title}
      family={FontType.medium}
      size={20}
      // style={styles.title}
    />
  );
};

const BuddyFinder = () => {
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
    <View style={styles.container}>
      <ProfileModal
        name={name}
        matchedon={matchedon}
        similarities={similarities}
        visible={modalVisible}
        toggle={toggleState}
      />

      {Header("Hi there")}

      <MatchActivityList Activities={ExampleMatchActivityData} />

      <BuddyList
        title={Titles.finder}
        DATA={ExampleProfiles}
        onPress={viewProfile}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  innerhalf: {
    height: "50%",
    width: "100%",
    // flex: 1,
  },
  profile: {
    marginBottom: 10,
  },
});

export default BuddyFinder;
