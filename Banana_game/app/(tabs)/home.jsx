import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const Home = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">

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
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default Home