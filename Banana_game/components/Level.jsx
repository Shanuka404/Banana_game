import React from "react";
import { Image } from "react-native";

const Level = ({ levelImage }) => {
  return (
    <Image
      source={levelImage}
      className="w-14 h-14 absolute top-[480] left-[280]"
      resizeMode="contain"
    />
  );
};

export default Level;
