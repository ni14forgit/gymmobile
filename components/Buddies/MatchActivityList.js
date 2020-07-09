import React, { useState, useCallback } from "react";
import MatchActivityInputs from "./MatchActivityInputs";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import SubMoreButton from "../Button/SubMoreButton";
import {
  LeftScrollAngleSVG,
  RightScrollAngleSVG,
} from ".././../assets/Icons/MiscSVG";
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
      <IconTemplate
        width={20}
        height={20}
        activityicon={LeftScrollAngleSVG}
        color={Color.blue}
      />
      <View style={styles.inner}>
        <FlatList
          data={Activities}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <MatchActivityInputs
              text={item.title}
              selected={!!selected.get(item.id)}
              style={styles.input}
              onPress={() => onSelect(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          extraData={selected}
        />
      </View>
      <IconTemplate
        width={20}
        height={20}
        activityicon={RightScrollAngleSVG}
        color={Color.blue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inner: {
    width: "85%",
  },
  input: {
    margin: 3,
  },
});

export default MatchActivityList;
