import React from "react";
import { TouchableOpacity, Image } from "react-native";
import images from "../constants/images"; // Import the image collection

const NumberButton = ({ value, onPress, position }) => (
  <TouchableOpacity
    onPress={() => onPress(value)} // Pass the value when button is clicked
    style={{
      position: "absolute",
      ...position, // Custom position for each button
    }}
  >
    <Image
      source={images[`btn${value}`]} // Access the correct button image using value
      style={{
        width: 50, // Adjust as needed
        height: 50, // Adjust as needed
      }}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

export default NumberButton;
