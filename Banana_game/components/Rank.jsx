import React from "react";
import { Text } from "react-native";

const Rank = ({ rank }) => {
  return (
    <Text
      className="text-white font-pbold text-4xl absolute"
      style={{
        top: 110,
        left: 170,
        width: 100,
        textAlign: "center",
        transform: [{ translateX: -25 }],
      }}
    >
      {rank}
    </Text>
  );
};

export default Rank;
