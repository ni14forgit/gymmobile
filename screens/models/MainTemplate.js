import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../navigation/TopHeader";
import BottomHeader from "../../navigation/BottomHeader";
import { useSelector } from "react-redux";

const MainTemplate = (props) => {
  const backButtonExists = useSelector((state) => state.navigation.isBack);
  const backButtonFunction = useSelector(
    (state) => state.navigation.backFunction
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader
        backButtonExists={backButtonExists}
        backButtonFunction={backButtonFunction}
        onPressDrawer={props.onPressDrawer}
        title={props.title}
        // style={styles.topheader}
      />

      <BottomHeader DATA={props.DATA} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MainTemplate;
