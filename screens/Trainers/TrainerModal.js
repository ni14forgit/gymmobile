import React, { useState, useRef, useEffect } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { View, StyleSheet, Dimensions, Modal } from "react-native";
import BioModal from "../../components/Trainers/BioModal";
import { Color, FontType, BorderRadius } from "../../assets/Constants";
import ModifiableText from "../../components/Text/ModifiableText";
import { TrainerModalData } from "../../assets/Constants/TrainerConstants";
import Xbutton from "../../components/Button/Xbutton";

const TrainerModal = ({ visible, toggleState }) => {
  const [page, setPage] = useState(0);
  const carousel = useRef();

  const renderItem = ({ item, index }) => {
    return (
      <BioModal
        isImage={item.isImage}
        source={item.source}
        play={index === page}
      />
    );
  };

  return (
    <View style={styles.outer}>
      <Modal
        onShow={() => setPage(0)}
        visible={visible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.outer}>
          <View style={styles.container}>
            <View style={styles.xbutton}>
              <Xbutton onPress={toggleState} />
            </View>
            <View style={styles.main}>
              <Carousel
                ref={carousel}
                itemWidth={Dimensions.get("window").width * 0.82}
                sliderWidth={Dimensions.get("window").width}
                data={TrainerModalData}
                layout={"stack"}
                layoutCardOffset={`18`}
                renderItem={renderItem}
                onSnapToItem={(index) => {
                  setPage(index);
                }}
                contentContainerCustomStyle={{
                  alignItems: "center",
                  maxHeight: Dimensions.get("window").width * 0.82 * 1.2,
                  // borderColor: "purple",
                  // borderWidth: 6,
                  // position: "relative",
                }}
              />
              <Pagination
                dotsLength={TrainerModalData.length}
                activeDotIndex={page}
                dotColor={Color.blue}
                inactiveDotColor={Color.badgrey}
                containerStyle={{
                  // maxHeight: 12,
                  // margin: -30,
                  // padding: -20,
                  paddingVertical: 0,
                  // marginTop: "3%",
                  // marginBottom: "3%",
                  // backgroundColor: "rgba(0, 0, 0, 0.75)",
                  // height: 30,
                }}
                dotStyle={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginHorizontal: 8,
                }}
                inactiveDotStyle={
                  {
                    // Define styles for inactive dots here
                  }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
              <View style={styles.textContainer}>
                <ModifiableText
                  text="Hi, my name is Alice and I've been a trainer with Duke for the past three years! Excited to meet you all! Excited to meet you all!"
                  size={FontType.reallysmall}
                  family={FontType.medium}
                  style={{ textAlign: "center" }}
                />
                <ModifiableText
                  text="Specialties: Cycling, Endurance, Nutrition"
                  size={FontType.reallysmall}
                  family={FontType.medium}
                  style={{ textAlign: "center" }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // height: "50%",
    // borderColor: "green",
    // borderWidth: 4,
    justifyContent: "flex-end",
    flex: 1,
  },
  outer: {
    justifyContent: "flex-end",
    flex: 1,
  },
  xbutton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
    height: "86%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  main: {
    justifyContent: "space-evenly",
    width: "100%",
    // borderColor: "pink",
    // borderWidth: 2,
    alignItems: "center",
  },
  textContainer: {
    height: "36%",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width * 0.82 * 0.95,
    borderRadius: 15,
  },
});

export default TrainerModal;
