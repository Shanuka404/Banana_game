import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

// Get screen width to set the image width dynamically
const screenWidth = Dimensions.get("window").width;

const Achievements = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center">
        <Image
            source={images.logo}
            style={{
              width: 100,
              height: 84,
              position: "absolute",
              top: -30,       // Distance from the top
              left: 25,        // Distance from the left
            }}
            resizeMode="contain"
          />
          <Image
            source={images.cupRack}
            style={{
              width: screenWidth, // Image fills the screen width
              height: 900,  // Let the image height adjust automatically
              aspectRatio: 0.4,   // Adjust this based on your image’s natural aspect ratio
              top: 30, 
            }}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Achievements;
