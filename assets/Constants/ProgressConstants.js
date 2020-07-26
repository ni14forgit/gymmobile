import { LegsSVG, AbsSVG, ArmsSVG } from "../Icons/WorkoutSVG";
const Titles = {
  track: {
    activities: "Input Growth Metrics",
    // options: "Expand an area to see exercises",
    options: "Expand Selections",
  },
  see: {
    activities: "Visualize Growth",
    options: "Expand Selections",
  },
  manage: {
    main: "Manage Activities",
    suggested: "Suggested",
  },
};

const Margin = {
  title: {
    left: "8%",
    vertical: "6%",
  },
};

const ExampleTrackSee = [
  {
    title: "Legs",
    subtitle: "Squats, Leg Press +1 more",
    svgicon: LegsSVG,
    initialstate: false,
    subitems: ["Squats", "Leg Press", "Calf Raise"],
  },
  {
    title: "Core",
    subtitle: "Planks, Situps",
    svgicon: AbsSVG,
    initialstate: false,
    subitems: ["Planks", "Situps"],
  },
  {
    title: "Arms",
    subtitle: "Push Ups, Dips +3 more",
    svgicon: ArmsSVG,
    initialstate: false,
    subitems: ["Push Ups", "Dips", "Close Grip Bench"],
  },
];

const WeightExercises = {
  Legs: {
    icon: "hi",
    title: "Legs",
  },
  Back: {
    icon: "hi",
    title: "Back",
  },
  Arms: {
    icon: "hi",
    title: "Arms",
  },
  Core: {
    icon: "hi",
    title: "Core",
  },
};

const Dimensions = {
  suboptionitemheight: 60,
  modal: {
    xButton: {
      height: 20,
      width: 20,
    },
  },
};

const Screens = {
  track: {
    ACTIVITIES: "activities",
    SUBACTIVITIES: "subactivities",
    TRACK: "track",
  },
  see: {
    ACTIVITIES: "activities",
    SUBACTIVITIES: "subactivities",
    SEE: "see",
  },
};

export {
  Titles,
  WeightExercises,
  Dimensions,
  Screens,
  Margin,
  ExampleTrackSee,
};
