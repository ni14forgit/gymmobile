import React from "react";
import StackModel from "../../../navigation/StackModel";
import { Screens } from "../../../assets/Constants/ProgressConstants";
import TrackActivities from "./TrackActivities";
import TrackSubOptions from "./TrackSubOptions";
import EndInput from "./EndInput";

const SCREENS = [
  { name: Screens.track.ACTIVITIES, screen: TrackActivities },
  { name: Screens.track.SUBACTIVITIES, screen: TrackSubOptions },
  { name: Screens.track.ENDINPUT, screen: EndInput },
];

const TrackNavigator = () => {
  return (
    <StackModel
      SCREENS={SCREENS}
      InitialScreenName={Screens.track.ACTIVITIES}
    />
  );
};

export default TrackNavigator;
