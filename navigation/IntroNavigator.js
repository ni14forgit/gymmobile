// import { createStackNavigator } from "@react-navigation/stack";
import Intro from "../screens/Intro/Intro";
import KnowYou from "../screens/Intro/KnowYou";
import Growth from "../screens/Intro/Spirit/Growth";
import Progress from "../screens/Intro/Spirit/Progress";
import SupportSystem from "../screens/Intro/Spirit/SupportSystem";
import Account from "../screens/Intro/Setup/Account";
import Activities from "../screens/Intro/Setup/Activities";
import GatherInfo from "../screens/Intro/Setup/GatherInfo";
import GoalsChar from "../screens/Intro/Setup/GoalsChar";
import ProfilePic from "../screens/Intro/Setup/ProfilePic";
import { Screens } from "../assets/Constants/IntroConstants";
import React from "react";

import StackModel from "./StackModel";

// const Stack = createStackNavigator();

// function IntroNavigator() {
//   return (
//     <Stack.Navigator
//       screenOptions={{ cardStyle: { backgroundColor: "white" } }}
//       headerMode="none"
//       initialRouteParams="Intro"
//     >
//       <Stack.Screen name="Intro" component={Intro} />
//       <Stack.Screen name="KnowYou" component={KnowYou} />
//       <Stack.Screen name="Growth" component={Growth} />
//       <Stack.Screen name="Progress" component={Progress} />
//       <Stack.Screen name="SupportSystem" component={SupportSystem} />
//       <Stack.Screen name="GatherInfo" component={GatherInfo} />
//       <Stack.Screen name="GoalsChar" component={GoalsChar} />
//       <Stack.Screen name="Activities" component={Activities} />
//       <Stack.Screen name="ProfilePic" component={ProfilePic} />
//       <Stack.Screen name="Account" component={Account} />
//     </Stack.Navigator>
//   );
// }

const SCREENS = [
  { name: Screens.INTRO, screen: Intro },
  { name: Screens.KNOWYOU, screen: KnowYou },
  { name: Screens.GROWTH, screen: Growth },
  { name: Screens.PROGRESS, screen: Progress },
  { name: Screens.SUPPORTSYSTEM, screen: SupportSystem },
  { name: Screens.GATHERINFO, screen: GatherInfo },
  { name: Screens.GOALSCHAR, screen: GoalsChar },
  { name: Screens.ACTIVITIES, screen: Activities },
  { name: Screens.PROFILEPIC, screen: ProfilePic },
  { name: Screens.ACCOUNT, screen: Account },
];

const IntroNavigator = () => {
  return <StackModel SCREENS={SCREENS} InitialScreenName={"Intro"} />;
};

export default IntroNavigator;
