import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AccordionList from "../../models/Progress/AccordionList";
import ModifiableText from "../../../components/Text/ModifiableText";
import SubOptionCategory from "../../../components/Progress/SubOptionCategory";
import { FontType } from "../../../assets/Constants";
import { Titles, Margin } from "../../../assets/Constants/ProgressConstants";
import { ExampleTrackSee } from "../../../assets/Constants/ProgressConstants";

const Options = () => {
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

  const ManageList = ({ DATA, title, bool }) => {
    return (
      <FlatList
        ListHeaderComponent={Header(title)}
        data={DATA}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        renderItem={({ item }) => (
          <SubOptionCategory
            title={item.title}
            subtitle={item.subtitle}
            svgicon={item.svgicon}
            stretched={bool}
            onPress={() => {}}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerhalf}>
        <ManageList
          title={Titles.manage.main}
          DATA={ExampleTrackSee}
          bool={true}
        />
      </View>
      <View style={styles.innerhalf}>
        <ManageList
          title={Titles.manage.suggested}
          DATA={ExampleTrackSee}
          bool={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "column",
  },
  innerhalf: {
    height: "50%",
    width: "100%",
    // flex: 1,
  },
  title: {
    marginVertical: Margin.title.vertical,
    marginLeft: Margin.title.left,
  },
});

export default Options;
