import React from "react";
import { View, Text, Image } from "react-native";

// Level images
const levelImages = {
  bronze: require("../assets/images/bronze.png"),
  silver: require("../assets/images/silver.png"),
  gold: require("../assets/images/Gold.png"),
  platinum: require("../assets/images/platinum.png"),
  epic: require("../assets/images/epic.png"),
  master: require("../assets/images/master.png"),
};

// Level component
const Level = ({ bestScore }) => {
  // Debugging log to ensure bestScore is passed correctly
  console.log("Best Score:", bestScore);

  // Function to determine level based on bestScore
  const getLevel = () => {
    if (bestScore > 30) {
      const level = bestScore < 200
        ? "bronze"
        : bestScore < 500
          ? "silver"
          : bestScore < 750
            ? "gold"
            : bestScore < 1000
              ? "platinum"
              : bestScore < 2500
                ? "epic"
                : "master";
      console.log("Level:", level); // Debugging log to check the level
      return level;
    }

  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {/* Display the level image based on the bestScore */}
      <Image
        source={levelImages[getLevel()]} // Dynamically get the level image based on score
        style={{
          width: 56,
          height: 56,
          position: "absolute",
          top: -590,
          left: 260,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Level;
