import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import icons from "../constants/icons";

const ProfileImage = ({ profileImage, setProfileImage }) => {
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
    <>
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
    </>
  );
};

export default ProfileImage;
