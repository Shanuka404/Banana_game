import React, { useState } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import images from "../../constants/images";
import icons from "../../constants/icons";

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

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfileImage({ uri: pickerResult.assets[0].uri });
    }
  };

  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full px-4 pt-10">
          
          {/* Logo Image */}
          <Image
            source={images.logo}
            style={{
              width: 100,
              height: 84,
              position: "absolute",
              top: -30,
              left: 25,
            }}
            resizeMode="contain"
          />

          {/* Background Image */}
          <Image
            source={images.bgprofilepage}
            style={{
              width: 400,
              height: 880,
              alignSelf: "center",
              top: 20,
            }}
            resizeMode="cover"
          />

          {/* Profile Image */}
          <Image
            source={profileImage}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "white",
              top: -740,
              left: 120,
            }}
          />

          {/* Plus Icon to pick image */}
          <TouchableOpacity onPress={pickImage} style={{
            width: 35,
            height: 35,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "white",
            top: -770,
            left: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(80, 100, 22, 0.9)",
          }}>
            <Image
              source={icons.plus}
              style={{
                width: 25,
                height: 25,
                tintColor: "black"
              }}
            />
          </TouchableOpacity>

          {/* Rank Display */}
          <Text
            className="text-white font-pbold text-4xl absolute"
            style={{
              top: 110,
              left: 170,
              width: 100,
              textAlign: "center",
              transform: [{ translateX: -25 }],
            }}
          >
            {defaultRank}
          </Text>

          {/* Best Score Display */}
          <Text className="text-white font-pbold text-4xl absolute"
            style={{
              top: 490,
              left: 73,
              width: 100,
              textAlign: "center",
              transform: [{ translateX: -25 }],
            }}
          >
            {defaultBestScore}
          </Text>

          {/* Name Display */}
          <Text 
            className="text-white font-pbold text-3xl absolute"
            style={{
              top: 325,
              left: 70,
              width: 300,
              textAlign: "center",
              transform: [{ translateX: -25 }],
            }}
          >
            {defaultName}
          </Text>

          {/* Level Display */}
          <Image
            source={defaultLevelImage}
            className="w-14 h-14 absolute top-[480] left-[280]"
            resizeMode="contain"
          />

          {/* Cup Images Display */}
          {cupImages.map((cup, index) => (
            <Image
              key={index}
              source={cup.src}
              style={{
                width: 80,
                height: 50,
                position: "absolute",
                ...cup.style,  // Apply custom position for each image
              }}
              resizeMode="contain"
            />
          ))}

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Profile;
