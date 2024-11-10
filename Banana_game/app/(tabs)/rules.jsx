import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";

const Rules = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">

          <Image
            source={images.logo}
            style={{
              width: 200,
              height: 84,
              position: "absolute",
              top: 20,       // Distance from the top
              alignSelf: "center",      // Distance from the left
            }}
            resizeMode="contain"
          />
          

          {/* Board image centered in the view */}
          <Image
            source={images.board}
            style={{
              width: "100%",
              height: 555,
              marginTop: 100, // Add margin to separate it from the logo
              maxWidth: 550,
            }}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Rules;
