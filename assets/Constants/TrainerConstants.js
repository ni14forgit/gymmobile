import TrainerModalImage from "../Image/trainerimagenew.jpeg";
const TrainerData = [
  {
    name: "Joe Smith",
    email: "joe.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
  },
  {
    name: "Alice Smith",
    email: "alice.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
  },
  {
    name: "Alice Smith",
    email: "alice.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
  },
  {
    name: "Joe Smith",
    email: "joe.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
  },
  {
    name: "Alice Smith",
    email: "alice.smith@duke.edu",
    specialties: "Specialties: Cycling, Endurance, Nutrition",
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

export { TrainerData, Margin, FontSize };
