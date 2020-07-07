import React, { useState, useCallback } from "react";
import MatchActivityInputs from "./MatchActivityInputs";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import SubMoreButton from "../Button/SubMoreButton";
import { LeftArrowSVG, SubRightMoreSVG } from ".././../assets/Icons/MiscSVG";
import { Color } from "../../assets/Constants";
const MatchActivityList = ({ Activities }) => {
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
    <View style={styles.container}>
      <View style={styles.direction}>
        <IconTemplate
          width={30}
          height={30}
          activityicon={LeftArrowSVG}
          color={Color.blue}
        />
        {/* <SubMoreButton /> */}
      </View>
      <View style={styles.inner}>
        <FlatList
          data={Activities}
          // showsVerticalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <MatchActivityInputs
              text={item.title}
              selected={!!selected.get(item.id)}
              // selected={true}
              style={styles.input}
              onPress={() => onSelect(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
        />
      </View>
      <View style={styles.direction}>
        <SubMoreButton />
      </View>

      {/* <ScrollView>
        <FlatList
          data={Activities}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignSelf: "flex-start" }}
          numColumns={Activities.length / 2}
          renderItem={({ item }) => (
            <MatchActivityInputs
              text={item.title}
              selected={!!selected.get(item.id)}
              // selected={true}
              style={styles.input}
              onPress={() => onSelect(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
        />
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // flex: 1,
    // borderColor: "blue",
    // borderWidth: 2,
    alignItems: "center",
  },
  inner: {
    width: "82%",
  },
  input: {
    margin: 3,
  },
  direction: {
    // borderColor: "red",
    // borderWidth: 2,
    maxWidth: "8%",
    maxHeight: "4%",
  },
});

export default MatchActivityList;
