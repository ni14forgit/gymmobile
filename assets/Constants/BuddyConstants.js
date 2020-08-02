import {
  Neel,
  Alice,
  Jennifer,
  Tim,
  Nidhi,
  Samuel,
  Annie,
} from "../Image/Users/UserImages";

const ActivityTitles = [
  "Running",
  "Rock Climbing",
  "Spikeball",
  "Basketball",
  "Yoga",
  "Swimming",
  "Volleyball",
  "Soul Cycle",
  "Weight Lifting",
];

const BorderRadius = {
  matchactivitynames: 5,
};

const TextSizes = {
  profiledescription: 15,
  profilecontactinfo: 14,
  profilename: 18,
};

const Margin = {
  title: {
    left: "8%",
    vertical: "6%",
  },
  matchactivity: {
    top: "6%",
    bottom: "3%",
  },
};

const Padding = {
  matchactivitynames: {
    vertical: 3,
    horizontal: 8,
  },
};

const ExampleMatchActivityData = [
  {
    id: "basketball",
    title: "Basketball",
  },
  {
    id: "weighttraining",
    title: "Weight Training",
  },
  {
    id: "wallclimbing",
    title: "Wall Climbing",
  },
  {
    id: "running",
    title: "Running",
  },
  {
    id: "swimming",
    title: "Swimming",
  },
  {
    id: "aerobics",
    title: "Aerobics",
  },
  {
    id: "soccer",
    title: "Soccer",
  },
  {
    id: "volleyball",
    title: "Volleyball",
  },
];

const FinderProfiles = [
  {
    id: "alice",
    name: "Alice Birkland",
    email: "alice.brikland@gmail.com",
    phone: "609-774-8230",
    matchedon: "Matched on Biking, Rock Climbing, Yoga",
    similarities: "Similarities: mental health, hardworking, night gymmer",
    photo: Alice,
  },
  {
    id: "sam",
    name: "Samuel Chan",
    email: "samuel.chan@gmail.com",
    phone: "609-774-8230",
    matchedon: "Matched on Basketball",
    photo: Samuel,
    similarities:
      "Similarities: maintaining healty body-fat percentage, hardworking, night gymmer",
  },
  {
    id: "jennifer",
    name: "Jennifer Gray",
    email: "jennifer.gray@duke.edu",
    phone: "609-774-8230",
    photo: Jennifer,
    matchedon: "Matched on Rock Climbing, Yoga",
    similarities: "Similarities: open to experiences, timely",
  },
  {
    id: "nidhi",
    name: "Nidhi Khan",
    email: "nidhi.khan@gmail.com",
    phone: "609-774-8230",
    photo: Nidhi,
    matchedon: "Matched on Swimming, Yoga",
    similarities: "Similaritiess: mental health, improve self-confidence",
  },
];

const RequestProfiles = [
  {
    id: "august",
    name: "August Rumsey",
    email: "august.rumsey@gmail.com",
    phone: "609-774-8230",
    photo: Tim,
    matchedon: "Matched on Biking",
    similarities: "Similarities: mental health, timely",
  },
  {
    id: "neel",
    name: "Neel Iyengar",
    email: "neel.iyengar@gmail.com",
    phone: "609-774-8230",
    photo: Neel,
    matchedon: "Matched on Yoga",
    similarities: "Similarities: find community, lift greater amounts",
  },
  {
    id: "annie",
    name: "Annie Le",
    email: "annie.le@uva.edu",
    phone: "609-774-8230",
    photo: Annie,
    matchedon: "Matched on Yoga",
    similarities:
      "Similarities: healty body-fat percentage, hardworking, improve self-confidence",
  },
];

const MatchProfiles = [
  {
    id: "jennifer",
    name: "Jennifer Gray",
    email: "jennifer.gray@duke.edu",
    phone: "609-774-8230",
    photo: Jennifer,
    matchedon: "Matched on Rock Climbing, Yoga",
    similarities: "Similarities: open to experiences, timely",
  },
  {
    id: "august",
    name: "August Rumsey",
    email: "august.rumsey@gmail.com",
    phone: "609-774-8230",
    photo: Tim,
    matchedon: "Matched on Biking",
    similarities: "Similarities: mental health, timely",
  },
  {
    id: "neel",
    name: "Neel Iyengar",
    email: "neel.iyengar@gmail.com",
    phone: "609-774-8230",
    photo: Neel,
    matchedon: "Matched on Yoga",
    similarities: "Similarities: find community, lift greater amounts",
  },
  {
    id: "annie",
    name: "Annie Le",
    email: "annie.le@uva.edu",
    phone: "609-774-8230",
    photo: Annie,
    matchedon: "Matched on Yoga",
    similarities:
      "Similarities: healty body-fat percentage, hardworking, improve self-confidence",
  },
];

const Titles = {
  finder: {
    main: "People you'll work well with!",
    list: "Select activities to explore",
  },
  requests: "Looking for some motivation?",
  buddies: {
    yesmatches: "You matched for a reason!",
    nomatches: "No buddies yet!",
  },
};

export {
  ActivityTitles,
  BorderRadius,
  Padding,
  ExampleMatchActivityData,
  FinderProfiles,
  TextSizes,
  Margin,
  Titles,
  MatchProfiles,
  RequestProfiles,
};
