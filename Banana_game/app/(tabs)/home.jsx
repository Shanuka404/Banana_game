import { StatusBar } from "expo-status-bar";
import { View, Image, ScrollView, Text, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import { router } from "expo-router";

import Logo from "../../components/Logo";
import BgHomePage from "../../components/BgHomePage";
import Button from "../../components/Button";
import HomeDetails from "../../components/HomeDetails";

// Declare the name variable
const name = "Devinda";
const image = images.master;

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
            namePosition={{ top: 78, left: 86 }}
            profilePosition={{ top: 67, left: 24 }}
            icon={images.someIcon} // replace with actual icon image if needed
            iconPosition={{ top: 75, left: 180 }}
            profileSize={43} // Profile image size
          />


          {/* Buttons */}
          <Button
            source={images.tournamentBtn}
            style={{
              position: "absolute",
              top: 620,
              left: 10,
              width: 160,
              height: 135,
            }}
          />
          <Button
            source={images.practiceBtn}
            style={{
              position: "absolute",
              top: 620,
              left: 210,
              width: 160,
              height: 135,
            }}
          />
          <Button
            source={images.leaderBoardBtn}
            style={{
              position: "absolute",
              top: 500,
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
