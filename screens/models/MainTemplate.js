import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../navigation/TopHeader";
import BottomHeader from "../../navigation/BottomHeader";
import { useSelector } from "react-redux";

const MainTemplate = (props) => {
  const backButtonExists = useSelector((state) => state.navigation.isBack);

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader
        backButtonExists={backButtonExists}
        onPressDrawer={props.onPressDrawer}
        title={props.title}
      />
      <BottomHeader DATA={props.DATA} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MainTemplate;
