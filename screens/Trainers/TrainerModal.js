import React, { useState, useRef } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { View, StyleSheet, Dimensions } from "react-native";
import BioModal from "../../components/Trainers/BioModal";
import { Color, FontType, BorderRadius } from "../../assets/Constants";
import ModifiableText from "../../components/Text/ModifiableText";

const SingleTrainerData = ["hi", "bi", "si"];

const TrainerModal = () => {
  const [page, setPage] = useState(0);

  const carousel = useRef();

  const renderItem = ({ item, index }) => {
    console.log(item);
    console.log(index);
    return <BioModal isImage={true} data={item} play={index === page} />;
  };

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <Carousel
          ref={carousel}
          itemWidth={Dimensions.get("window").width * 0.82}
          sliderWidth={Dimensions.get("window").width}
          data={SingleTrainerData}
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
          }}
        />
        <Pagination
          dotsLength={SingleTrainerData.length}
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
            height: 30,
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
  );
};

const styles = StyleSheet.create({
  outer: {
    justifyContent: "flex-end",
    flex: 1,
    // height: "100%",
    borderColor: "red",
    borderWidth: 1,
  },
  container: {
    // justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
    // height: "100%",
  },
  textContainer: {
    // backgroundColor: Color.blue,
    // borderColor: Color.blue,
    // borderWidth: 2,
    height: "36%",
    // marginTop: "5%",
    justifyContent: "space-evenly",
    // textAlign: "center",
    width: Dimensions.get("window").width * 0.82 * 0.95,
    borderRadius: 15,
  },
});

export default TrainerModal;
