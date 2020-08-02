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
    email: "amanda.harris@gmail.com",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
    photo: Amanda,
    sent: false,
  },
  {
    name: "Oliver Quincy",
    email: "oliver.quincy@yahoo.com",
    specialties: "Specialties: Nutrition, Yoga",
    photo: Oliver,
    sent: false,
  },
  {
    name: "Lily Shah",
    email: "lily.shah@gmail.com",
    specialties: "Specialties: Powerlifting",
    photo: Lily,
    sent: false,
  },

  {
    name: "Andrea Hernandez",
    email: "andrea.hernandez@gmail.com",
    specialties: "Specialties: Aerobics, Mental Health",
    photo: Andrea,
    sent: false,
  },
  {
    name: "Calvin Wang",
    email: "calvin.wang@gmail.com",
    specialties: "Specialties: Bodyweight Workouts",
    photo: Calvin,
    sent: false,
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
