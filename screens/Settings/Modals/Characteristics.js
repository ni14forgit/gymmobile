import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontType, Color, Survey } from "../../../assets/Constants";
import ScrollQuestion from "../../../components/Input/ScrollQuestion";
import ConfigModal from "../../models/Settings/ConfigModal";
import ModifiableText from "../../../components/Text/ModifiableText";
import ColoredOption from "../../../components/Input/Basic/ColoredOption";

// this is where Regimen should handle it's own data, probably with Redux
const CharacteristicsComponent = () => {
  var initialData = {};

  const [selection, setSelection] = useState(initialData);

  const toggleItem = (index) => {
    setSelection({ ...selection, [index]: !selection[index] });
    console.log(selection);
  };

  useEffect(() => {
    var toBecome = {};
    for (var i; i < Survey.options.characteristics.length; i++) {
      toBecome[[i]] = true;
    }

    initialData = toBecome;
  });

  return (
    <View style={styles.container}>
      <ModifiableText
        size={FontType.question}
        family={FontType.medium}
        text={Survey.question.characteristics}
        style={{ width: "92%", alignSelf: "center" }}
      />
      <ScrollView
        style={styles.scrollparent}
        contentContainerStyle={styles.scrollcontainer}
        showsVerticalScrollIndicator={false}
      >
        {Survey.options.characteristics.map((val, index) => {
          return (
            <ColoredOption
              style={styles.optionspacing}
              text={val}
              onPress={() => toggleItem(index)}
              selected={selection[index]}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const Characteristics = ({ isVisible, changeClose, xClose }) => {
  return (
    <ConfigModal
      MainComponent={CharacteristicsComponent}
      isVisible={isVisible}
      changeClose={() => changeClose(true, "characteristics")}
      xClose={xClose}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flex: 1,
    // height: "50%",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  scrollparent: {
    marginTop: 20,
    // height: "100%",
    // borderColor: "blue",
    // borderWidth: 2,
    maxHeight: 270,
  },
  scrollcontainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  optionspacing: {
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default Characteristics;
