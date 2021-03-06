import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ActivitySubOptions from "../../../components/Progress/ActivitySubOptions";
import ModifiableText from "../../../components/Text/ModifiableText";
import { FontType } from "../../../assets/Constants";
import { Margin } from "../../../assets/Constants/ProgressConstants";

const AccordionList = ({ DATA, title, forward }) => {
  const Header = () => {
    return (
      <ModifiableText
        text={title}
        family={FontType.medium}
        size={FontType.description}
        style={styles.title}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={DATA}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        renderItem={({ item }) => (
          <ActivitySubOptions
            title={item.title}
            subtitle={item.subtitle}
            svgicon={item.svgicon}
            subitems={item.subitems}
            initialstate={item.initialstate}
            forward={forward}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    marginVertical: Margin.title.vertical,
    marginLeft: Margin.title.left,
  },
});

export default AccordionList;
