import React, { useEffect, useRef } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TopHeader from "../../navigation/TopHeader";
import BottomHeader from "../../navigation/BottomHeader";
import { useSelector, useDispatch } from "react-redux";
import { setToastFunction } from "../../store/actions/toast";
import Toaster from "../../components/Misc/Toaster";

const MainTemplate = (props) => {
  const backButtonExists = useSelector((state) => state.navigation.isBack);
  const backButtonFunction = useSelector(
    (state) => state.navigation.backFunction
  );
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const showToast = (text) => {
    toastRef.current.show(text, 3000);
  };

  useEffect(() => {
    dispatch(setToastFunction(showToast));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Toaster toastRef={toastRef} />
      <TopHeader
        backButtonExists={backButtonExists}
        backButtonFunction={backButtonFunction}
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
