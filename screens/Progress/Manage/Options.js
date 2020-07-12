import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import SubOptionCategory from "../../../components/Progress/SubOptionCategory";
import { FontType } from "../../../assets/Constants";
import { Titles, Margin } from "../../../assets/Constants/ProgressConstants";
import { ExampleTrackSee } from "../../../assets/Constants/ProgressConstants";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { setBackButton } from "../../../store/actions/navigation";
import { useFocusEffect } from "@react-navigation/native";

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

const ManageList = ({ DATA, title, bool, onPress }) => {
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
          onPress={() => onPress(item.title, item.svgicon)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const Options = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubTitle, setModalSubTitle] = useState("");
  const [modalIcon, setModalIcon] = useState(null);

  const toggleState = () => {
    setModalVisible(!modalVisible);
  };

  const deleteActivity = (activity, svgicon) => {
    const title =
      "Are you sure you want to delete " + activity + " from your activities?";
    setModalTitle(title);
    setModalIcon(svgicon);
    setModalSubTitle("(You can add it back anytime.)");
    toggleState();
  };

  const addActivity = (activity, svgicon) => {
    console.log("add the following activity: " + activity);
  };

  const dispatch = useDispatch();
  const setBackMenu = () => {
    console.log("triggered");
    dispatch(setBackButton(false));
  };
  useFocusEffect(() => {
    setBackMenu();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        title={modalTitle}
        subtitle={modalSubTitle}
        icon={modalIcon}
        visible={modalVisible}
        toggle={toggleState}
      />
      <View style={styles.innerhalf}>
        <ManageList
          title={Titles.manage.main}
          DATA={ExampleTrackSee}
          bool={true}
          onPress={deleteActivity}
        />
      </View>
      <View style={styles.innerhalf}>
        <ManageList
          title={Titles.manage.suggested}
          DATA={ExampleTrackSee}
          bool={false}
          onPress={addActivity}
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
