import React, { useState } from "react";
import ModifiableText from "../../../components/Text/ModifiableText";
import ProfileCard from "../../../components/Buddies/ProfileCard";
import { FontType } from "../../../assets/Constants";
import { Margin } from "../../../assets/Constants/BuddyConstants";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Image, View } from "react-native";
import Nobuddies from "../../../assets/Image/nobuddies.png";

const BuddyList = ({ isFinder, DATA, onPress, title, style }) => {
  const [profiles, setProfiles] = useState(DATA);
  const showToast = useSelector((state) => state.toast.toastFunction);

  const Header = (title) => {
    return (
      <ModifiableText
        text={title}
        family={FontType.medium}
        size={FontType.description}
        style={[styles.title, style]}
      />
    );
  };

  const sendFinder = (id, name) => {
    console.log("sendfinder");
    // showToast(`Sent request to ${name}!`);
    showToast(`Sent request to ${name}!`);
    // custom logic to send a friend request
    setProfiles(profiles.filter((item) => item.id != id));
  };

  const acceptRequest = (id, name) => {
    // console.log("acceptrequest");
    showToast(`Accepted ${name}'s request! New buddy!`);
    // custom logic to accept a friend request
    setProfiles(profiles.filter((item) => item.id != id));
  };

  const declineFinder = (id, name) => {
    // console.log("declineFinder");
    showToast(`Canceled friend request to ${name}.`);
    // custom logic to decline sending a friend request
    setProfiles(profiles.filter((item) => item.id != id));
  };

  const declineRequest = (id, name) => {
    // console.log("declineRequest");
    showToast(`Declined ${name}'s request.`);
    // custom logic to decline a friend
    setProfiles(profiles.filter((item) => item.id != id));
  };
  return (
    <View>
      {profiles.length !== 0 ? (
        <FlatList
          ListHeaderComponent={Header(title)}
          data={profiles}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          renderItem={({ item }) => (
            <ProfileCard
              onPress={() =>
                onPress(item.name, item.similarities, item.matchedon)
              }
              name={item.name}
              similarities={item.similarities}
              matchedon={item.matchedon}
              style={styles.profile}
              photo={item.photo}
              positiveAction={
                isFinder
                  ? () => sendFinder(item.id, item.name)
                  : () => acceptRequest(item.id, item.name)
              }
              negativeAction={
                isFinder
                  ? () => declineFinder(item.id, item.name)
                  : () => declineRequest(item.id, item.name)
              }
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.imageContainer}>
          {Header("Swing by later!")}
          <Image source={Nobuddies} style={styles.image} />
        </View>
      )}
    </View>
  );
  // null;
};

const styles = StyleSheet.create({
  title: {
    marginVertical: Margin.title.vertical,
    marginLeft: Margin.title.left,
  },
  profile: {
    marginBottom: 10,
  },
  imageContainer: {
    height: 500,
    // flex: 1,
    // borderColor: "red",
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    maxHeight: 350,
    // borderColor: "red",
    // borderWidth: 2,
    borderRadius: 175,
  },
});

export default BuddyList;
