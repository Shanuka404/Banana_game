import React from "react";
import { Image } from "react-native";

const CupImages = ({ cupImages }) => {
  return (
    <>
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
    </>
  );
};

export default CupImages;
