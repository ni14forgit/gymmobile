import {
  BasketballSVG,
  SwimmingSVG,
  WeightliftingSVG,
  RunningSVG,
  AerobicsSVG,
  SoccerSVG,
  VolleyBallSVG,
  WallClimbingSVG,
} from "./Icons/ActivitySVG";
const Color = {
  blue: "#334E8B",
  white: "#FFFFFF",
  grey: "rgba(51, 78, 139, 0.25);",
  black: "black",
};

const FontType = {
  regular: "redhattext-regular",
  bold: "redhattext-bold",
  medium: "redhattext-medium",
  button: 18,
  activityCard: 18,
  small: 20,
  // inputPressNumber: 18,
  spirit: 32,
  title: 40,
  question: 24,
  namepassword: 24,
  description: 24,
};

const TouchOpacity = 0.6;

const Padding = {
  login: {
    vertButton: 12,
    horizButton: 23,
  },
  input: {
    vertButton: 4,
    horizButton: 12,
  },
  goalscharbutton: {
    width: 10,
    height: 6,
  },

  default: {
    horizButton: 23,
  },
};

const Margin = {
  buttonBottom: "8%",
  left: "5%",
  right: "5%",
  button: {
    textButtonRight: "35%",
  },

  IntroPage: {
    left: "10%",
  },
};

const Ratio = {
  slider: 7 / 12,
};

const Dimension = {
  buttonHeight: 50,
  circle: 38,
  maxButtonWidth: "50%",

  button: {
    continue: {
      width: 150,
    },
  },

  slider: {
    thumb: {
      height: 30,
      width: 30,
    },
    track: {
      height: 15,
    },
  },

  qnavigator: {
    height: "12%",
    width: "80%",
  },

  introButton: {
    height: "15%",
  },
};

const BorderRadius = {
  button: 10,
  circle: 19,
  slider: {
    thumb: 10,
    track: 10,
  },
  profilepic: {
    container: 24,
    image: 20,
  },
  goalschar: 20,
  activityCard: 10,
};

const Statements = {
  spirit: {
    first:
      "____ will help you find the right support system to achieve your fitness goals.",
    second:
      "_____ will help you keep track of your progress in a simple and effective way. ",
    third:
      "Optimal growth comes with utilizing our smart technology at your gym.",
  },
  button: {
    login: "Log In",
    signup: "Sign Up",
    continue: "Continue",
    back: "Back",
  },
  title: {
    knowyou: "Now, let’s get to know you",
    lastthings: "Some last things...",
    main: `Fitness is \nYour\nCommunity.`,
  },
  description: {
    datacollect:
      "The data we’ll collect will help you find fitness buddies and track your progress.",
    optout: "You’ll always have the option to opt out.",
  },
};

const Survey = {
  question: {
    timesaweek: "How many times a week do you usually work out?",
    years: "How many years have you consistently worked out?",
    goals: "What are your goals?",
    characteristics: "Tell us about yourself?",
    activities: "What activities do you usually participate in?",
    profilepic: "Set a Profile Pic!",
    age: "Age",
    weight: "Weight",
  },
  options: {
    numbers7plus: [1, 2, 3, 4, 5, 6, "7+"],
    numbers5plus: [1, 2, 3, 4, "5+"],
    decline: "decline response",
    age: {
      min: 17,
      max: 70,
    },
    weight: {
      min: 100,
      max: 300,
    },
    goals: [
      "improve self confidence",
      "find community",
      "reduce body fat %",
      "be active",
      "lift greater amounts",
      "maintain fitness schedule",
      "try new sports",
      "track my progress",
      "improve self confidence",
      "find community",
      "reduce body fat %",
      "be active",
      "lift greater amounts",
      "maintain fitness schedule",
      "try new sports",
      "track my progress",
    ],
    characteristics: [
      "improve self confidence",
      "find community",
      "reduce body fat %",
      "be active",
      "lift greater amounts",
      "maintain fitness schedule",
      "try new sports",
      "track my progress",
    ],
  },
};

const Icon = {
  activity: [
    {
      id: "basketball",
      title: "Basketball",
      svg: BasketballSVG,
    },
    {
      id: "weighttraining",
      title: "Weight Training",
      svg: WeightliftingSVG,
    },
    {
      id: "wallclimbing",
      title: "Wall Climbing",
      svg: WallClimbingSVG,
    },
    {
      id: "running",
      title: "Running",
      svg: RunningSVG,
    },
    {
      id: "swimming",
      title: "Swimming",
      svg: SwimmingSVG,
    },
    {
      id: "aerobics",
      title: "Aerobics",
      svg: AerobicsSVG,
    },
    {
      id: "soccer",
      title: "Soccer",
      svg: SoccerSVG,
    },
    {
      id: "volleyball",
      title: "Volleyball",
      svg: VolleyBallSVG,
    },
  ],
  storeitem: {},
};

export {
  Color,
  FontType,
  Padding,
  Dimension,
  BorderRadius,
  Statements,
  Margin,
  Survey,
  TouchOpacity,
  Ratio,
  Icon,
};
