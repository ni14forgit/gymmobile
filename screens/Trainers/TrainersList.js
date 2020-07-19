import React, { useState } from "react";
import TrainerModal from "./TrainerModal";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import TrainerCard from "../../components/Trainers/TrainerCard";
import { TrainerData, Margin } from "../../assets/Constants/TrainerConstants";
import { FontType } from "../../assets/Constants";
import ModifiableText from "../../components/Text/ModifiableText";

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

const Trainers = () => {
  const [visible, setVisible] = useState(false);
  const toggleState = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <TrainerModal visible={visible} toggleState={toggleState} />
      <View>
        <FlatList
          ListHeaderComponent={Header("Our professional staff!")}
          data={TrainerData}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          renderItem={({ item }) => (
            <TrainerCard
              name={item.name}
              style={styles.match}
              email={item.email}
              specialties={item.specialties}
              myBioOnPress={toggleState}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    marginVertical: Margin.title.vertical,
    marginLeft: Margin.title.left,
  },
  match: {
    marginBottom: 10,
  },
});

export default Trainers;
