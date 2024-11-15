import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import LeaderboardTable from "../../components/LeaderBoardTable";
import PlayerImage from "../../components/PlayerImage";
import Logo from "../../components/Logo";
import BgLeaderBoardPage from "../../components/BgLeaderBoardPage";
import Button from "../../components/Button";

import { router } from "expo-router";

const leaderboardData = [
  { rank: 1, player: { image: images.dev, name: "Shanuka" }, score: 2600 },
  { rank: 2, player: { image: images.profile, name: "Devinda" }, score: 2500 },
  { rank: 3, player: { image: images.profile1, name: "Ranaweera" }, score: 2000 },
  { rank: 4, player: { image: images.profile, name: "Samantha" }, score: 1800 },
  { rank: 5, player: { image: images.profile1, name: "Kavindu" }, score: 1700 },
  { rank: 6, player: { image: images.dev, name: "Jay" }, score: 1600 },
  { rank: 7, player: { image: images.profile, name: "Nimal" }, score: 1500 },
];

const LeaderBoard = () => (
  <SafeAreaView className="bg-darkGreen h-full">
    <View className="w-full flex justify-center items-center h-full px-4">

      <Logo />
      <BgLeaderBoardPage />
    </View>

    {/* Leaderboard Table */}
    <View style={{ marginTop: -350, alignItems: "center", flex: 1 }}>
      <LeaderboardTable data={leaderboardData} />
    </View>

    <PlayerImage top={225} left={169} image={images.dev} />
    <PlayerImage top={195} left={67} image={images.dev} />
    <PlayerImage top={195} left={272} image={images.dev} />

    <Button
      source={images.Back}
      style={{
        position: "absolute",
        top: 50,
        left: 300,
        width: 85,
        height: 30,
      }}
      onPress={() => router.push("/(tabs)/home")}
    />

    <StatusBar backgroundColor="#161622" style="light" />
  </SafeAreaView>
);

export default LeaderBoard;
