import React from "react";
import { Image, Dimensions } from "react-native";
import images from "../constants/images";

const screenWidth = Dimensions.get("window").width;

const BgHomePage = () => (
  <Image
    source={images.bgHome}
    style={{
      width: screenWidth,
      height: 900,
      top: -128,
      aspectRatio: 0.4,
    }}
    resizeMode="contain"
  />
);

export default BgHomePage;
