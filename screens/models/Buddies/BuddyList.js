import React from "react";
import ModifiableText from "../../../components/Text/ModifiableText";
import ProfileCard from "../../../components/Buddies/ProfileCard";
import { FontType } from "../../../assets/Constants";
import { Margin } from "../../../assets/Constants/BuddyConstants";
import { FlatList, StyleSheet } from "react-native";

const Header = (title) => {
  return (
    <ModifiableText
      text={title}
      family={FontType.medium}
      size={FontType.description}
      style={styles.title}
    />
  );
};

const BuddyList = ({ DATA, onPress, title }) => {
  return (
    <FlatList
      ListHeaderComponent={Header(title)}
      data={DATA}
      showsVerticalScrollIndicator={false}
      numColumns={1}
      renderItem={({ item }) => (
        <ProfileCard
          onPress={() => onPress(item.name, item.similarities, item.matchedon)}
          name={item.name}
          similarities={item.similarities}
          matchedon={item.matchedon}
          style={styles.profile}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: Margin.title.vertical,
    marginLeft: Margin.title.left,
  },
  profile: {
    marginBottom: 10,
  },
});

export default BuddyList;
