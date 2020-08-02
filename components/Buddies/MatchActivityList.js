import React, { useState, useCallback, useRef } from "react";
import MatchActivityInputs from "./MatchActivityInputs";
import { FlatList, View, StyleSheet, ScrollView } from "react-native";
import IconTemplate from "../../assets/IconTemplate";
import {
  LeftScrollAngleSVG,
  RightScrollAngleSVG,
} from ".././../assets/Icons/MiscSVG";
import { Color } from "../../assets/Constants";
import { RightButton, LeftButton } from "./Button/ScrollHorizontalButton";
const MatchActivityList = ({ Activities }) => {
  const [selected, setSelected] = useState(new Map());
  const [currActivity, setCurrActivity] = useState([1, -1, 0]);
  const NUMACTIVITIES = Activities.length;

  const flatlist = useRef();
  const onSelect = useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected]
  );

  const onViewRef = React.useRef(({ viewableItems }) => {
    // console.log(viewableItems);
    const firstViewItem = viewableItems[0].item.id;
    // console.log(firstViewItem);
    const index = Activities.findIndex((item) => item.id === firstViewItem);
    console.log(index);

    setCurrActivity([index + 1, index - 1, index]);

    // Use viewable items in state or as intended
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const scrollRight = () => {
    console.log(currActivity);

    if (currActivity[2] < NUMACTIVITIES - 3) {
      setCurrActivity([
        currActivity[0] + 1,
        currActivity[1] + 1,
        currActivity[2] + 1,
      ]);
      flatlist.current.scrollToIndex({ index: currActivity[0] });
    }
  };

  const scrollLeft = () => {
    console.log(currActivity);

    if (currActivity[1] > -1) {
      setCurrActivity([
        currActivity[0] - 1,
        currActivity[1] - 1,
        currActivity[2] - 1,
      ]);
      flatlist.current.scrollToIndex({ index: currActivity[1] });
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <LeftButton onPress={scrollLeft} />
        <View style={styles.inner}>
          <FlatList
            ref={flatlist}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
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
        <RightButton onPress={scrollRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // height: "10%",
    backgroundColor: Color.white,
    marginVertical: 25,
    // borderColor: "purple",
    // borderWidth: 2,
    justifyContent: "center",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inner: {
    width: "85%",
    alignSelf: "center",

    // borderColor: "purple",
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    // marginVertical: "5%",
    // borderColor: "purple",
    // borderWidth: 2,
    // minWidth: 100,
    marginHorizontal: 3,
    alignSelf: "center",
  },
});

export default MatchActivityList;
