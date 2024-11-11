import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

// Declare the name variable
const name = "Devinda";
const image = images.medal1;

const Home = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
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
              width: 380,
              height: 800,
              marginTop: -10,
              maxWidth: 500,
            }}
            resizeMode="contain"
          />
          
          <View
            style={{
              position: "absolute",
              top: 64,       // Adjust to desired position
              left: 13,      // Adjust to desired position
              alignItems: "center",
            }}
          >
            <Image
              source={images.dev} // assuming dev.jpg is referenced as `images.dev`
              style={{
                width: 48,
                height: 48,
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
              left: 81,      // Adjust to desired position
              alignItems: "center",
            }}
          >
            <Text className=" text-white font-bold text-center font-psemibold">{name}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 75,       // Adjust to desired position
              left: 175,     // Adjust to desired position
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
              top: 550,    // Adjust to desired position
              left: 10,    // Adjust to desired position
            }}
          >
            <Image source={images.tournamentBtn} style={{ width: 160, height: 130 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 550,    // Adjust to desired position
              left: 180,   // Adjust to desired position
            }}
          >
            <Image source={images.practiceBtn} style={{ width: 200, height: 55 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              top: 600,    // Adjust to desired position
              left: 180,   // Adjust to desired position
            }}
          >
            <Image source={images.leaderBoardBtn} style={{ width: 208, height: 78 }} />
          </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Home;
