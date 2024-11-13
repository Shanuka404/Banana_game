import { Image, View, Dimensions } from "react-native";
import images from "../constants/images";  

// Get the screen width
const { width: screenWidth } = Dimensions.get("window");

const BgAchievementPage = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={images.cupRack} // Adjust this path based on where the image is stored
        style={{
          width: screenWidth, // Image fills the screen width
          height: 1600, // Let the image height adjust automatically
          aspectRatio: 0.4, // Adjust this based on your image’s natural aspect ratio
          top: 30,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default BgAchievementPage;
