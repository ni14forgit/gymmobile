import React from "react";
import ModifiableText from "../../../components/Text/ModifiableText";
import MatchCard from "../../../components/Buddies/MatchCard";
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

const MatchList = ({ DATA, onPress, title }) => {
  return (
    <FlatList
      ListHeaderComponent={Header(title)}
      data={DATA}
      showsVerticalScrollIndicator={false}
      numColumns={1}
      renderItem={({ item }) => (
        <MatchCard
          name={item.name}
          similarities={item.similarities}
          matchedon={item.matchedon}
          style={styles.match}
          phone={item.phone}
          email={item.email}
          onPress={onPress}
          photo={item.photo}
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
  match: {
    marginBottom: 10,
  },
});

export default MatchList;
