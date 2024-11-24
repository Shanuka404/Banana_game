import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import BgIntroductionpage from "../../components/BgIntroductionpage";

const Introduction = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">

          <Logo />
          <BgIntroductionpage />

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Introduction;
