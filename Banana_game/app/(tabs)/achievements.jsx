import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import BgAchievementPage from "../../components/BgAchievementPage";

// Get screen width to set the image width dynamically
const screenWidth = Dimensions.get("window").width;

const Achievements = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center">

          <Logo />
          <BgAchievementPage />

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Achievements;
