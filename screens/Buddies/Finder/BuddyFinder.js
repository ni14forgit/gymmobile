import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BuddyList from "../../models/Buddies/BuddyList";
import ProfileModal from "../../models/Buddies/ProfileModal";
import {
  ExampleProfiles,
  Titles,
  ExampleMatchActivityData,
  Margin,
} from "../../../assets/Constants/BuddyConstants";
import MatchActivityList from "../../../components/Buddies/MatchActivityList";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";

const Header = ({ title }) => {
  return (
    <ModifiableText
      text={title}
      family={FontType.medium}
      size={FontType.description}
      style={styles.title}
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

      <Header title={Titles.finder.list} />

      <MatchActivityList Activities={ExampleMatchActivityData} />

      <BuddyList
        title={Titles.finder.main}
        DATA={ExampleProfiles}
        onPress={viewProfile}
        style={styles.marginactivitylistfix}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  profile: {
    marginBottom: 10,
  },
  title: {
    marginTop: Margin.matchactivity.top,
    // marginBottom: Margin.matchactivity.bottom,
    // borderColor: "purple",
    // borderWidth: 2,
    marginLeft: Margin.title.left,
  },
  marginactivitylistfix: {
    marginTop: "-1%",
  },
});

export default BuddyFinder;
