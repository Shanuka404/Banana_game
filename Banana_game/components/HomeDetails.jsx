// components/ProfileIcon.js
import React from "react";
import { View, Image, Text } from "react-native";

const HomeDetails = ({ profileImage, name, namePosition, icon, iconPosition, profilePosition, profileSize }) => (
  <>
    {/* Profile Image */}
    <View style={{ position: "absolute", ...profilePosition, alignItems: "center" }}>
      <Image
        source={profileImage}
        style={{
          width: profileSize,
          height: profileSize,
          borderRadius: profileSize / 2,
          borderWidth: 1,
          borderColor: "white",
        }}
      />
    </View>

    {/* Name */}
    <View style={{ position: "absolute", ...namePosition, alignItems: "center" }}>
      <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>{name}</Text>
    </View>

    {/* Icon */}
    <View style={{ position: "absolute", ...iconPosition, alignItems: "center" }}>
      <Image
        source={icon}
        style={{
          width: 25, // Default width
          height: 25, // Default height
        }}
        resizeMode="contain"
      />
    </View>
  </>
);

export default HomeDetails;
