import React, { useState, useCallback } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import ActivityCard from "../../components/Input/ActivityCard";
import ModifiableText from "./../../components/Text/ModifiableText";
import {
  Icon,
  Statements,
  FontType,
  Margin,
  Survey,
} from "../../assets/Constants";
import { Dimensions } from "react-native";
import QNavigator from "../../components/Misc/QNavigator";

const DATA = Icon.activity;

function Item({ id, title, activityicon, selected, onSelect }) {
  return (
    <ActivityCard
      onPress={() => onSelect(id)}
      activityicon={activityicon}
      title={title}
      selected={selected}
      style={styles.size}
    />
  );
}

const Activities = () => {
  const [selected, setSelected] = useState(new Map());

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <SafeAreaView style={styles.outer}>
      <View style={styles.container}>
        <ModifiableText
          size={FontType.question}
          family={FontType.medium}
          text={Survey.question.activities}
          style={styles.titlequestion}
        />
        <FlatList
          data={DATA}
          // style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <Item
              id={item.id}
              title={item.title}
              activityicon={item.svg}
              selected={!!selected.get(item.id)}
              onSelect={onSelect}
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
        />
      </View>
      <QNavigator
        selected={0}
        numpages={4}
        textbuttontext={Statements.button.back}
        filledbuttontext={Statements.button.continue}
        style={styles.qnavigator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",

    // borderColor: "red",
    // borderWidth: 3,
  },

  titlequestion: {
    marginVertical: "2%",
  },

  outer: {
    flex: 1,
  },
  flatlist: {
    flex: 1,
    // borderColor: "blue",
    // borderWidth: 3,
  },
  qnavigator: {
    height: "15%",
    alignItems: "stretch",
    justifyContent: "space-around",
    marginLeft: Margin.left,
    marginRight: Margin.right,
    // flexDirection: "column",
  },
  size: {
    height: Dimensions.get("window").height * 0.22,
    width: Dimensions.get("window").width * 0.38,
    margin: 10,
    padding: 0,
  },
});

export default Activities;
