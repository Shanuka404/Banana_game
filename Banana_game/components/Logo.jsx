import React from "react";
import { Image, Dimensions } from "react-native";
import images from "../constants/images";

const screenWidth = Dimensions.get("window").width;

const Logo = () => (
  <>
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
  </>
);

export default Logo;