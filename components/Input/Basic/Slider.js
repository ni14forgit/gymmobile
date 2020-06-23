import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import {
  Color,
  FontType,
  Survey,
  Dimension,
  BorderRadius,
  Ratio,
} from "../../../assets/Constants";
import ModifiableText from "../../Text/ModifiableText";
import Decline from "../../Input/Basic/Decline";

const SliderInput = (props) => {
  const [val, setVal] = useState(props.minval);

  const valAbove = () => {
    var roundedVal = Math.round(Number(val));
    if (roundedVal === props.maxval) {
      roundedVal = "> " + roundedVal;
    } else if (roundedVal === props.minval) {
      roundedVal = "< " + roundedVal;
    }
    return (
      <ModifiableText
        style={styles.viewabove}
        text={roundedVal}
        size={FontType.small}
        family={FontType.regular}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <ModifiableText
            size={FontType.question}
            family={FontType.medium}
            text={props.question}
            style={styles.modifiabletext}
          />
        </View>
        <View style={styles.sliderOverall}>
          <Slider
            onValueChange={(value) => setVal(value)}
            minimumValue={props.minval}
            maximumValue={props.maxval}
            thumbTintColor={Color.blue}
            maximumTrackTintColor={Color.grey}
            minimumTrackTintColor={Color.blue}
            trackStyle={styles.track}
            thumbStyle={styles.thumb}
            //   disabled={true}
            renderAboveThumbComponent={valAbove}
          />
        </View>
      </View>
      <Decline
        style={styles.decline}
        selected={false}
        text={Survey.options.decline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderColor: "black",
    // borderWidth: 4,
  },
  sliderOverall: {
    // paddingBottom: "2%",
  },
  modifiabletext: {
    marginRight: "3%",
  },
  thumb: {
    height: Dimension.slider.thumb.height,
    width: Dimension.slider.thumb.width,
    borderRadius: BorderRadius.slider.thumb,
  },
  track: {
    height: Dimension.slider.track.height,
    borderRadius: BorderRadius.slider.track,
    width: Dimensions.get("window").width * Ratio.slider,
  },
  viewabove: {
    marginLeft: 3,
  },
  decline: {
    maxWidth: "45%",
    marginTop: "1%",
  },
  inner: {
    flexDirection: "row",
    alignItems: "stretch",
  },
});

export default SliderInput;
