import React from "react";
import { Image, Dimensions } from "react-native";
import images from "../constants/images";

const screenWidth = Dimensions.get("window").width;

const BgLeaderBoardPage = () => (
  <Image
    source={images.LeaderBoard}
    style={{
      width: screenWidth,
      height: 980,
      top: 20,
      aspectRatio: 0.4,
    }}
    resizeMode="contain"
  />
);

export default BgLeaderBoardPage;
