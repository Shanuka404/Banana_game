import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, Text, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

// Declare the name variable
const name = "Devinda";
const image = images.master;

// Get screen width to set the image width dynamically
const screenWidth = Dimensions.get("window").width;
const PracticeMode = () => {
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
            source={images.bgHome}
            style={{
              width: screenWidth,
              height: 900,
              top: -128,
              aspectRatio: 0.4,
            }}
            resizeMode="contain"
          />
          
          <View
            style={{
              position: "absolute",
              top: 67,       // Adjust to desired position
              left: 24,      // Adjust to desired position
              alignItems: "center",
            }}
          >
            <Image
              source={images.dev} // assuming dev.jpg is referenced as `images.dev`
              style={{
                width: 43,
                height: 43,
                borderRadius: 40,   // Makes the image circular
                borderWidth: 1,
                borderColor: "white",
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 78,       // Adjust to desired position
              left: 86,      // Adjust to desired position
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text className=" text-white font-bold text-center font-psemibold">{name}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 75,       // Adjust to desired position
              left: 180,     // Adjust to desired position
              alignItems: "center",
            }}
          >
            <Image
              source={image}
              style={{
                width: 25,    // Adjust width as needed
                height: 25,   // Adjust height as needed
              }}
              resizeMode="contain"
            />
          </View>
          {/* Buttons */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 620,    // Adjust to desired position
              left: 10,    // Adjust to desired position
            }}
          >
            <Image source={images.tournamentBtn} style={{ width: 160, height: 135 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 620,    // Adjust to desired position
              left: 210,   // Adjust to desired position
            }}
          >
            <Image source={images.practiceBtn} style={{ width: 160, height: 135 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 500,    // Adjust to desired position
              left: 10,   // Adjust to desired position
            }}
          >
            <Image source={images.leaderBoardBtn} style={{ width: 365, height: 100 }} />
          </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default PracticeMode;
