import React from "react";
import LineGraph from "@chartiful/react-native-line-graph";
import { Color, FontType } from "../../../assets/Constants";

const LineChart = ({ data, isBezier }) => {
  return (
    <LineGraph
      data={data}
      //   labels={["10", "10", "10", "10", "10", "10", "10", "10"]}
      width={350}
      height={160}
      isBezier={isBezier}
      lineColor={Color.white}
      dotColor={Color.white}
      lineWidth={7}
      dotSize={0}
      baseConfig={{
        xAxisLabelCount: 4,
        // startAtZero: true,
        startAtZero: false,
        hasXAxisBackgroundLines: false,
        hasYAxisLabels: false,
        hasXAxisLabels: true,
        xAxisLabelStyle: {
          //   fontFamily: "Red Hat Text",
          color: Color.white,
          fontSize: 15,
          fontWeight: "bold",
          xOffset: -2,
          //   yOffset: 20,
        },
        yAxisLabelStyle: {
          //   fontFamily: "Red Hat Text",
          color: Color.white,
          fontSize: 15,
          fontWeight: "bold",
          yOffset: 15,
        },
      }}
      style={{
        marginTop: 10,
        backgroundColor: Color.blue,
        opacity: 0.8,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // width: "10%",
        // padding: 20,
      }}
    />
  );
};

export default LineChart;
