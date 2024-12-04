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
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTime = async () => {
    try {
      const response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Colombo");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTimeData(data);
      setError(false);
    } catch (error) {
      console.error("Error fetching time data:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTime();

    // Set interval to reload the API every 24 hours
    const interval = setInterval(() => {
      fetchTime();
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedDate = timeData?.datetime ? timeData.datetime.split("T")[0] : null;

  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* Display Date */}
          <View className="w-full flex items-center mt-4">
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : error || !timeData ? (
              <Text
                style={{
                  backgroundColor: "#ffcccb",
                  color: "#a94442",
                  fontWeight: "bold",
                  fontSize: 16,
                  padding: 10,
                  borderRadius: 10,
                  textAlign: "center",
                  top: 30,
                  overflow: "hidden",
                  width: "90%",
                }}
              >
                Unable to fetch date data. Please check your connection.
              </Text>
            ) : (
              <Text
                style={{
                  backgroundColor: "#2e8b57",
                  color: "#155724",
                  fontWeight: "bold",
                  fontSize: 16,
                  padding: 10,
                  borderRadius: 10,
                  textAlign: "center",
                  top: 30,
                  overflow: "hidden",
                  width: "90%",
                }}
              >
                Date: {formattedDate}
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
