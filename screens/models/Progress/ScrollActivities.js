import React, { useState, useCallback } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
// import { Dimensions } from "../../../assets/Constants";
import { Icon, Margin, FontType } from "../../../assets/Constants";
import { Dimensions } from "react-native";
import ActivityCard from "../../../components/Input/ActivityCard";
import ModifiableText from "../../../components/Text/ModifiableText";
import { Titles } from "../../../assets/Constants/ProgressConstants";
import FlatlistTitle from "../../../components/Text/FlatlistTitle";

//DATA should be replaced with data PASSED in as a prop for specific needs
DATA = Icon.activity;

function Item({ onPress, id, title, activityicon, selected, onSelect }) {
  return (
    <ActivityCard
      onPress={onPress}
      activityicon={activityicon}
      title={title}
      selected={selected}
      style={styles.size}
    />
  );
}

const ScrollActivities = (props) => {
  const [selected, setSelected] = useState(new Map());

  // const Header = () => {
  //   return (
  //     <ModifiableText
  //       text={props.title}
  //       family={FontType.medium}
  //       size={FontType.description}
  //       style={styles.title}
  //     />
  //   );
  // };

  const onPress = () => {
    props.onPress();
  };

  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected]
  );

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={FlatlistTitle(props.title)}
          data={DATA}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <Item
              onPress={onPress}
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
    </View>
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
  size: {
    height: Dimensions.get("window").height * 0.22,
    width: Dimensions.get("window").width * 0.38,
    margin: 10,
    padding: 0,
  },
  // title: {
  //   // width: "80%",
  //   // alignSelf: "center",
  //   marginTop: "6%",
  //   // marginLeft: "5%",
  //   // borderWidth: 1,
  //   // borderColor: "red",
  // },
});
export default ScrollActivities;
