import TrainerModalImage from "../Image/trainerimagenew.jpeg";
import {
  Amanda,
  Andrea,
  Calvin,
  Lily,
  Oliver,
} from "../Image/Trainers/TrainerImages";
const TrainerData = [
  {
    name: "Amanda Harrison",
    email: "joe.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
    photo: Amanda,
  },
  {
    name: "Oliver Quincy",
    email: "alice.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
    photo: Oliver,
  },
  {
    name: "Lily Shah",
    email: "alice.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
    photo: Lily,
  },

  {
    name: "Andrea Hernandez",
    email: "joe.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
    photo: Andrea,
  },
  {
    name: "Calvin Wang",
    email: "alice.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
    photo: Calvin,
  },
];

const TrainerModalData = [
  {
    isImage: false,
    source: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  },
  {
    isImage: true,
    source: TrainerModalImage,
  },
  {
    isImage: false,
    source: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  },
];

const Margin = {
  title: {
    left: "8%",
    vertical: "6%",
  },
  // matchactivity: {
  //   top: "6%",
  //   bottom: "3%",
  // },
};

const FontSize = {
  biomodal: 18,
};

const Misc = {
  trainermodalopacity: 0.33,
};

export { TrainerData, Margin, FontSize, TrainerModalData, Misc };
