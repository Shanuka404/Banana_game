import React from "react";
import { Image, View } from "react-native";

const PlayerImage = ({ top, left, image }) => (
  <View
    style={{
      position: "absolute",
      top,
      left,
      alignItems: "center",
    }}
  >
    <Image
      source={image}  // The image is now passed as a prop, so no need to import images
      style={{
        width: 53,
        height: 55,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "white",
      }}
    />
  </View>
);

export default PlayerImage;
