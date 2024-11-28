import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "../../constants/images";
import ProfileImage from "../../components/ProfileImage";
import Rank from "../../components/Rank";
import BestScore from "../../components/BestScore";
import Level from "../../components/Level";
import Name from "../../components/Name";
import CupImages from "../../components/CupImages";
import Logo from "../../components/Logo";
import BgProfilePage from "../../components/BgProfilePage";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import axios from 'axios';
import { checkUserLoggedIn } from "../../services/auth";

const Profile = () => {
  const [username, setUsername] = useState(null);
  const [highScore, setBestScore] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [userRank, setUserRank] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // State to hold login status

  useEffect(() => {
    // Check if user is logged in when component is mounted
    const checkLoginStatus = async () => {
      const loggedIn = await checkUserLoggedIn(); // Call the check function
      setIsLoggedIn(loggedIn); // Set the login status
    };

    checkLoginStatus(); // Call function once on mount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // Don't proceed until login status is confirmed
    if (isLoggedIn === null) {
      return;
    }

    if (!isLoggedIn) {
      // Redirect to login page if user is not logged in
      router.push("/(auth)/sign-in");
      return;
    }

    const fetchProfileData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        const storedHighScore = await AsyncStorage.getItem("highScore");
        const storedProfileImage = await AsyncStorage.getItem("profileImage");

        // Update state variables
        setUsername(storedUsername || ""); // Default to an empty string if null
        setBestScore(storedHighScore ? parseInt(storedHighScore, 10) : 0);
        setProfileImage(storedProfileImage || "defaultProfileImage.png"); // Default image if null
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData(); // Fetch profile data after login confirmation

  }, [isLoggedIn]); // Re-run effect when `isLoggedIn` changes

  useEffect(() => {
    // Only fetch rank if username is set
    if (username) {
      const fetchUserRank = async () => {
        try {
          const response = await axios.get('http://172.20.10.3:5000/api/auth/rankings');
          const users = response.data;

          // Sort users by high score (descending)
          users.sort((a, b) => b.highScore - a.highScore);

          // Find the user's rank based on their username
          const rank = users.findIndex(user => user.username === username) + 1;
          setUserRank(rank); // Update userRank state here

          // Save the rank to AsyncStorage
          await AsyncStorage.setItem("userRank", String(rank)); // Storing rank as string
        } catch (error) {
          console.error("Error fetching rankings:", error);
        }
      };

      fetchUserRank(); // Fetch rank once username is set
    }
  }, [username]); // This effect runs only when `username` changes

  // Show a loading spinner while checking login status
  if (isLoggedIn === null) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full px-4 pt-10">
          <Logo />
          <BgProfilePage />
          <ProfileImage profileImage={profileImage} setProfileImage={setProfileImage} />

          {/* Pass the userRank state to the Rank component */}
          <Rank rank={userRank} />
          <BestScore bestScore={highScore} />
          <Name name={username} />
          <Level bestScore={highScore} />
          <CupImages highScore={highScore} />

          {/* SignOut Button */}
          <Button
            source={images.SignOutBtn}
            style={{
              position: "absolute",
              top: 25,
              right: 10,
              width: 115,
              height: 27,
            }}
            onPress={() => {
              AsyncStorage.clear(); // Clear all stored data on sign-out
              router.push("/(auth)/sign-in");
            }}
          />

          <Button
            source={images.Delete}
            style={{
              position: "absolute",
              top: 920,
              left: 85,
              width: 200,
              height: 45,
            }}
            onPress={async () => {
              try {
                const token = await AsyncStorage.getItem("jwtToken"); // Retrieve JWT from AsyncStorage
                console.log("Token retrieved:", token);

                // Make DELETE request to the backend to delete the user
                const response = await axios.delete('http://172.20.10.3:5000/api/auth/delete', {
                  headers: {
                    Authorization: `Bearer ${token}`, // Send JWT in Authorization header
                  }
                });

                if (response.status === 200) {
                  console.log("User deleted successfully");
                  AsyncStorage.clear(); // Clear all stored data on delete
                  Alert.alert("Success", "User deleted successfully!", [
                    {
                      text: "OK",
                      onPress: () => router.push("/(auth)/sign-in"), // Redirect to sign-in page
                    },
                  ]);
                } else {
                  console.error("Error deleting account:", response.data);
                }
              } catch (error) {
                console.error("Error:", error);
              }
            }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Profile;
