// https://www.npmjs.com/package/@chartiful/react-native-horizontal-bar-graph
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";
import React from "react";
import { Color, FontType } from "../../../assets/Constants";
import { Dimensions } from "react-native";

const BarGraph = ({ data }) => {
  return (
    <VerticalBarGraph
      data={data}
      //   labels={["an", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
      width={350}
      height={100}
      barRadius={5}
      barColor={Color.white}
      barWidthPercentage={0.65}
      baseConfig={{
        hasYAxisLabels: false,
        hasXAxisBackgroundLines: false,
        xAxisLabelStyle: {
          position: "left",
          color: Color.white,
          fontSize: 15,
          fontWeight: "bold",
        },
      }}
      style={{
        backgroundColor: Color.blue,
        opacity: 0.8,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 10,
      }}
    />
  );
};

export default BarGraph;
