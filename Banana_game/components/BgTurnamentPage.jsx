import React from "react";
import { Image, Dimensions } from "react-native";
import images from "../constants/images";

const screenWidth = Dimensions.get("window").width;

const BgTurnamentPage = () => (
  <Image
    source={images.BgTurnamentPage}
    style={{
      width: screenWidth,
      height: 950,
      top: -10,
      aspectRatio: 0.4,
    }}
    resizeMode="contain"
  />
);

export default BgTurnamentPage;
