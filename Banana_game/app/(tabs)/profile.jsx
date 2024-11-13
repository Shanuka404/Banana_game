import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "../../constants/images";
import ProfileImage from "../../components/ProfileImage";
import Rank from "../../components/Rank";
import BestScore from "../../components/BestScore";
import Level from "../../components/Level";
import Name from "../../components/Name";
import CupImages from "../../components/CupImages";
import Logo from "../../components/Logo";
import BgProfilePage from "../../components/BgProfilePage";
import Button from "../../components/Button";

import { router } from "expo-router";

// Initial array of images with manual positions for each
const initialCupImages = [
  { src: images.cup1, style: { top: 672, left: 38 } },
  { src: images.cup2, style: { top: 672, left: 156 } },
  { src: images.cup3, style: { top: 672, left: 270 } },
  { src: images.cup4, style: { top: 783, left: 99 } },
  { src: images.cup5, style: { top: 783, left: 222 } },
];

const Profile = () => {
  const [profileImage, setProfileImage] = useState(images.profile1);
  const [cupImages, setCupImages] = useState(initialCupImages); // Set initial images here
  const defaultBestScore = 2500;
  const defaultRank = 2;
  const defaultLevelImage = images.master;
  const defaultName = "Shanuka";

  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full px-4 pt-10">

          <Logo />

          {/* Background Image */}
          <BgProfilePage />

          {/* Profile Image */}
          <ProfileImage profileImage={profileImage} setProfileImage={setProfileImage} />

          {/* Rank Display */}
          <Rank rank={defaultRank} />

          {/* Best Score Display */}
          <BestScore bestScore={defaultBestScore} />

          {/* Name Display */}
          <Name name={defaultName} />

          {/* Level Display */}
          <Level levelImage={defaultLevelImage} />

          {/* Cup Images Display */}
          <CupImages cupImages={cupImages} />

          {/* SignOutbtn */}
          <CupImages cupImages={cupImages} />
          <Button
            source={images.SignOutBtn}
            style={{
              position: "absolute",
              top: 900,
              left: 10,
              width: 360,
              height: 80,
            }}
            onPress={() => router.push("/(auth)/sign-in")}
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Profile;
