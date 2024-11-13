import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, Text, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";



// Get screen width to set the image width dynamically
const screenWidth = Dimensions.get("window").width;
const Tournamenet = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center h-full px-4">

          {/* Logo Image */}
          <Image
            source={images.logo}
            style={{
              width: 100,
              height: 84,
              position: "absolute",
              top: -30,
              left: 25,
            }}
            resizeMode="contain"
          />

          {/* Board Image */}
          <Image
            source={images.LeaderBoard}
            style={{
              width: screenWidth,
              height: 900,
              top: -128,
              aspectRatio: 0.4,
            }}
            resizeMode="contain"
          />
          

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Tournamenet;
