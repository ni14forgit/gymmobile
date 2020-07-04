import React, { useState, useCallback } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Icon } from "../../../assets/Constants";

//DATA should be replaced with data PASSED in as a prop for specific needs
DATA = Icon.activity;

const ScrollActivities = (props) => {
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
        <FlatList
          data={DATA}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  outer: {
    flex: 1,
  },
});
export default ScrollActivities;
