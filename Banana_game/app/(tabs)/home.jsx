import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import { router } from "expo-router";

import Logo from "../../components/Logo";
import BgHomePage from "../../components/BgHomePage";
import Button from "../../components/Button";
import HomeDetails from "../../components/HomeDetails";

const Home = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center h-full px-4">

          <Logo />

          <BgHomePage />

          <HomeDetails
            profileImage={images.dev}
            name="Devinda"
            namePosition={{ top: 78, left: 90 }}
            profilePosition={{ top: 67, left: 23 }}
            icon={images.master} // replace with actual icon image if needed
            iconPosition={{ top: 75, left: 183 }}
            profileSize={45} // Profile image size
          />


          {/* Buttons */}
          <Button
            source={images.tournamentBtn}
            style={{
              position: "absolute",
              top: 540,
              left: 10,
              width: 160,
              height: 135,
            }}
            onPress={() => router.push("/(game)/tournament")}
          />
          <Button
            source={images.practiceBtn}
            style={{
              position: "absolute",
              top: 540,
              left: 210,
              width: 160,
              height: 135,
            }}
            onPress={() => router.push("/(game)/practice-mode")}
          />
          <Button
            source={images.leaderBoardBtn}
            style={{
              position: "absolute",
              top: 420,
              left: 10,
              width: 365,
              height: 100,
            }}
            onPress={() => router.push("/(game)/leader-board")}
          />

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Home;
