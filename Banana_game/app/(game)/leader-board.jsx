import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import LeaderboardTable from "../../components/LeaderBoardTable";
import PlayerImage from "../../components/PlayerImage";
import Logo from "../../components/Logo";
import BgLeaderBoardPage from "../../components/BgLeaderBoardPage";
import Button from "../../components/Button";

import { router } from "expo-router";

const baseUrl = "http://172.20.10.3:5000/uploads";

const LeaderBoard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://172.20.10.3:5000/api/auth/leaderboard");
        const players = await response.json();

        const formattedData = players.map((player, index) => ({
          rank: index + 1,
          player: {
            image: {
              uri: player.profileImage
                ? `${baseUrl}/${player.profileImage}`
                : `${baseUrl}/defaultProfileImage.png`,
            },
            name: player.username,
          },
          score: player.highScore,
        }));

        setLeaderboardData(formattedData);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to fetch leaderboard data.");
      }
    };

    fetchLeaderboard();
  }, []);

  // Top 3 player images
  const topPlayers = leaderboardData.slice(0, 3);

  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <View className="w-full flex justify-center items-center h-full px-4">
        <Logo />
        <BgLeaderBoardPage />
      </View>

      {/* Leaderboard Table */}
      <View style={{ marginTop: -350, alignItems: "center", flex: 1 }}>
        <LeaderboardTable data={leaderboardData} />
      </View>

      {topPlayers.map((player, index) => (
        <PlayerImage
          key={index}
          top={index === 0 ? 225 : 195}
          left={index === 0 ? 169 : index === 1 ? 67 : 272}
          image={player.player.image}
        />
      ))}

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
};

export default LeaderBoard;
