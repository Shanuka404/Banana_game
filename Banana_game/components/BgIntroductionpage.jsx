// components/BoardImage.jsx
import React from 'react';
import { Image } from 'react-native';
import images from "../constants/images";  

const BgIntroductionpage = () => {
  return (
    <Image
      source={images.board}
      style={{
        width: "100%",
        height: 555,
        marginTop: -10, // Add margin to separate it from the logo
        maxWidth: 550,
      }}
      resizeMode="contain"
    />
  );
};

export default BgIntroductionpage;
