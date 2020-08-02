import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ModifiableText from "../../../components/Text/ModifiableText";
import SubOptionCategory from "../../../components/Progress/SubOptionCategory";
import { FontType, Icon } from "../../../assets/Constants";
import { Titles, Margin } from "../../../assets/Constants/ProgressConstants";
import { ExampleTrackSee } from "../../../assets/Constants/ProgressConstants";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { setBackButton } from "../../../store/actions/navigation";
import { useFocusEffect } from "@react-navigation/native";
import { filter } from "lodash";

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
          subtitle={""}
          svgicon={item.svg}
          stretched={bool}
          onPress={() => onPress(item.title, item.svg, item.id)}
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
  const [manageActivities, setManageActivities] = useState(
    Icon.activity.slice(0, Icon.activity.length - 3)
  );
  const [suggestedActivities, setSuggestedActivities] = useState(
    Icon.activity.slice(Icon.activity.length - 3, Icon.activity.length)
  );
  const [mainOptionTitle, setMainOptionTitle] = useState("");
  const [secondaryOptionTitle, setSecondaryOptionTitle] = useState("");
  const [id, setId] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const toggleState = () => {
    setModalVisible(!modalVisible);
  };

  const deleteActivity = (activity, svgicon, id) => {
    const title =
      "Are you sure you want to delete " + activity + " from your activities?";
    setModalTitle(title);
    setModalIcon(svgicon);
    setModalSubTitle("(You can add it back anytime.)");
    toggleState();
    setMainOptionTitle("Cancel");
    setSecondaryOptionTitle("Delete");
    setId(id);
    setIsAdd(false);
  };

  const addActivity = (activity, svgicon, id) => {
    const title = "Confirming to add " + activity + "?";
    setModalTitle(title);
    setModalIcon(svgicon);
    setModalSubTitle("");
    toggleState();
    setMainOptionTitle("Add");
    setSecondaryOptionTitle("Cancel");
    setId(id);
    setIsAdd(true);
  };

  const actualAdd = (id) => {
    for (var i = 0; i < suggestedActivities.length; i++) {
      if (suggestedActivities[i].id === id) {
        setManageActivities([suggestedActivities[i], ...manageActivities]);
        setSuggestedActivities(
          suggestedActivities.filter((item) => item.id !== id)
        );
        break;
      }
    }
    toggleState();
  };

  const actualDelete = (id) => {
    for (var i = 0; i < manageActivities.length; i++) {
      if (manageActivities[i].id === id) {
        setSuggestedActivities([manageActivities[i], ...suggestedActivities]);
        setManageActivities(manageActivities.filter((item) => item.id !== id));
        break;
      }
    }
    toggleState();
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
        mainOptionTitle={mainOptionTitle}
        secondaryOptionTitle={secondaryOptionTitle}
        isAdd={isAdd}
        actualAdd={actualAdd}
        actualDelete={actualDelete}
        id={id}
      />
      <View style={styles.innerhalf}>
        <ManageList
          title={Titles.manage.main}
          DATA={manageActivities}
          bool={true}
          onPress={deleteActivity}
        />
      </View>
      <View style={styles.innerhalf}>
        <ManageList
          title={Titles.manage.suggested}
          DATA={suggestedActivities}
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
