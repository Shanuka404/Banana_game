import React from "react";
import {Dimensions, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Logo from "../../components/Logo";
import BgAchievementPage from "../../components/BgAchievementPage";

// Get screen width to set the image width dynamically
const screenWidth = Dimensions.get("window").width;

const Achievements = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  


  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* Logo with fade and movement */}
        <Animated.View
          style={{
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0, -50], // Adjust movement as you scroll
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [1, 0.5], // Gradually fades the content
              extrapolate: "clamp",
            }),
          }}
          className="w-full flex justify-center items-center"
        >
          <Logo />
        </Animated.View>

        {/* Background with movement and zoom */}
        <Animated.View
          style={{
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0, 30], // Content moves down when scrolling
                  extrapolate: "clamp",
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [0, 200], // As user scrolls
                  outputRange: [1, 1.1], // Zoom in on scroll
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [1, 0.8], // Fades a little on scroll
              extrapolate: "clamp",
            }),
          }}
        >
          <BgAchievementPage />
        </Animated.View>
      </Animated.ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Achievements;
