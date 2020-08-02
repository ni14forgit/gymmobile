import React, { useState } from "react";
import TrainerModal from "./TrainerModal";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import TrainerCard from "../../components/Trainers/TrainerCard";
import { TrainerData, Margin } from "../../assets/Constants/TrainerConstants";
import { FontType } from "../../assets/Constants";
import ModifiableText from "../../components/Text/ModifiableText";
import MeetModal from "./MeetModal";

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
  const [bioVisible, setBioVisible] = useState(false);
  const [meetVisible, setMeetVisible] = useState(false);
  const [name, setName] = useState("");
  const [specialties, setSpecialties] = useState("");
  const [trainerdata, setTrainerData] = useState(TrainerData);

  const openBioState = (name, specialties) => {
    setName(name.split(" ")[0]);
    setSpecialties(specialties);
    setBioVisible(!bioVisible);
  };
  const openMeetState = (name) => {
    setName(name.split(" ")[0]);
    setMeetVisible(!meetVisible);
  };

  const closeBioState = () => {
    setBioVisible(!bioVisible);
  };
  const closeMeetState = () => {
    setMeetVisible(!meetVisible);
  };

  const sendInvite = () => {
    const updatedTrainerData = [...trainerdata];

    console.log(updatedTrainerData);

    for (var i = 0; i < updatedTrainerData.length; i++) {
      if (updatedTrainerData[i].name.includes(name)) {
        updatedTrainerData[i].sent = true;
        break;
      }
    }

    setTrainerData(updatedTrainerData);
  };

  return (
    <View style={styles.container}>
      <TrainerModal
        visible={bioVisible}
        toggleState={closeBioState}
        name={name}
        specialties={specialties}
      />
      <MeetModal
        name={name}
        visible={meetVisible}
        toggleState={closeMeetState}
        sendInvite={sendInvite}
      />
      <View>
        <FlatList
          ListHeaderComponent={Header("Our professional staff!")}
          data={trainerdata}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          renderItem={({ item }) => (
            <TrainerCard
              name={item.name}
              style={styles.match}
              email={item.email}
              specialties={item.specialties}
              myBioOnPress={() => openBioState(item.name, item.specialties)}
              myMeetOnPress={() => openMeetState(item.name)}
              photo={item.photo}
              sent={item.sent}
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
