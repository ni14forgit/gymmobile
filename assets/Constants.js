const Color = {
  blue: "#334E8B",
  white: "#FFFFFF",
  grey: "rgba(51, 78, 139, 0.25);",
};

const FontType = {
  regular: "redhattext-regular",
  bold: "redhattext-bold",
  medium: "redhattext-medium",
  button: 18,
  // inputPressNumber: 18,
  spirit: 32,
  title: 40,
  question: 24,
  description: 24,
};

const TouchOpacity = 0.6;

const Padding = {
  login: {
    vertButton: 12,
    horizButton: 26,
  },
  input: {
    vertButton: 4,
    horizButton: 12,
  },
};

const Margin = {
  buttonBottom: "12%",
};

const Dimension = {
  buttonHeight: 50,
  circle: 38,
  maxButtonWidth: "50%",
};

const BorderRadius = {
  button: 10,
  circle: 19,
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
    characteristics: "Which characteristics best define you?",
    activities: "What activities do you usually participate in?",
    profilepic: "Set a Profile Pic!",
  },
  options: {
    numbers: [1, 2, 3, 4, 5, 6, "7+"],
    decline: "decline response",
  },
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
};
