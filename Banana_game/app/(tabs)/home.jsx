import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import images from "../../constants/images";
import { router } from "expo-router";

import Logo from "../../components/Logo";
import BgHomePage from "../../components/BgHomePage";
import Button from "../../components/Button";

const Home = () => {
  const [timeData, setTimeData] = useState({
    datetime: "2024-12-02T21:31:00",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Colombo");
        const data = await response.json();
        setTimeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching time data:", error);
        setLoading(false);
      }
    };

    fetchTime();
  }, []);

  const formattedDate = timeData.datetime ? timeData.datetime.split("T")[0] : "2024-12-02";
  const formattedTime = timeData.datetime
    ? timeData.datetime.split("T")[1].split(":").slice(0, 2).join(":") 
    : "21:31";

  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* Display Time */}
          <View className="w-full flex items-center mt-4">
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text
                style={{
                  backgroundColor: '#2e8b57',
                  color: '#155724',
                  fontWeight: 'bold',
                  fontSize: 16,
                  padding: 10,
                  borderRadius: 10,
                  textAlign: 'center',
                  top: 30,
                  overflow: 'hidden',
                  width: '90%',
                }}
              >
                Date: {formattedDate} Time: {formattedTime}
              </Text>
            )}
          </View>

          {/* Logo */}
          <Logo />

          {/* Background */}
          <BgHomePage />

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
