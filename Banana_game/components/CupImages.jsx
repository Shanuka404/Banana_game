import { Image } from "react-native";

const CupImages = ({ highScore }) => {
  // Array of cup images
  const cupImages = [
    require("../assets/images/cup1.png"),
    require("../assets/images/cup2.png"),
    require("../assets/images/cup3.png"),
    require("../assets/images/cup4.png"),
    require("../assets/images/cup5.png"),
  ];

  // Define positions for the cups
  const positions = [
    { top: 672, left: 38 },
    { top: 672, left: 156 },
    { top: 672, left: 270 },
    { top: 783, left: 99 },
    { top: 783, left: 222 },
  ];

  // Initialize an array to store the visible cups based on the high score
  const visibleCups = [];

  // Map the cups to their respective high score ranges and include only those that meet the criteria
  const initialCupImages = [
    { src: cupImages[0], style: positions[0], threshold: 50 },
    { src: cupImages[1], style: positions[1], threshold: 100 },
    { src: cupImages[2], style: positions[2], threshold: 150 },
    { src: cupImages[3], style: positions[3], threshold: 250 },
    { src: cupImages[4], style: positions[4], threshold: 250 },
  ];

  // Loop through the initialCupImages and add cups that meet the threshold condition
  initialCupImages.forEach((cup) => {
    if (highScore >= cup.threshold) {
      visibleCups.push(cup); // Include cup if the high score meets the threshold
    }
  });

  return (
    <>
      {visibleCups.map((cup, index) => (
        <Image
          key={index}
          source={cup.src} // Use the image based on the high score condition
          style={{
            width: 80,
            height: 50,
            position: "absolute",
            top: cup.style.top,
            left: cup.style.left,
          }}
          resizeMode="contain"
        />
      ))}
    </>
  );
};

export default CupImages;
