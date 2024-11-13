import React from "react";
import { Image } from "react-native";
import images from "../constants/images";

const BgProfilePage = () => {
  return (
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
  );
};

export default BgProfilePage;
