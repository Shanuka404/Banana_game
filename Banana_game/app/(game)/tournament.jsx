import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Modal, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/Logo";
import BgTurnamentPage from "../../components/BgTurnamentPage";
import Button from "../../components/Button";
import NumberButton from "../../components/NumberButton";
import images from "../../constants/images";
import { router } from "expo-router";
import icons from "../../constants/icons";
import logo from "../../assets/images/logo.png";

const Tournament = () => {
  // State variables to handle game logic
  const [answer, setAnswer] = useState(null); // Answer from API
  const [isGameOver, setIsGameOver] = useState(false);
  const [triggerMessage, setTriggerMessage] = useState(""); // Holds the trigger message for modal
  const [timer, setTimer] = useState(30); // Timer starts at 30 seconds
  const [score, setScore] = useState(0); // Initial score
  const [lives, setLives] = useState(3); // Player starts with 3 lives
  const [feedbackStatus, setFeedbackStatus] = useState(null); // Feedback status for correct/wrong answer
  const [questionImage, setQuestionImage] = useState(null); // Question image URL from API
  const [imagePosition, setImagePosition] = useState({
    top: 230,
    left: 50,
    width: 300,
    height: 250,
  });
  
  const [wrongAttempts, setWrongAttempts] = useState(0); // Track wrong attempts per question
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0); // Track consecutive correct answers
  const [alertMessage, setAlertMessage] = useState(""); // Alert message for feedback
  const [alertBackgroundColor, setAlertBackgroundColor] = useState(""); // Background color for alert messages

  // Fetch a new question from the API when the component mounts
  useEffect(() => {
    fetchNewQuestion();
  }, []);

  // Timer countdown effect that ends the game if timer or lives reach zero
  useEffect(() => {
    if (timer > 0 && lives > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      endGame();
    }
  }, [timer, lives]);

  // Fetch question and answer from API
  const fetchNewQuestion = async () => {
    try {
      const response = await fetch("http://marcconrad.com/uob/banana/api.php?out=json");
      const data = await response.json();
      setAnswer(data.solution); // Set answer from API
      setQuestionImage(data.question); // Set question image from API
      setWrongAttempts(0); // Reset wrong attempts for each new question
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  // End game function with alerts for running out of time or lives
  const endGame = () => {
    let message = "";

    // Conditional logic to determine the message
    if (timer <= 0 && lives <= 0) {
      message = "No lives and time's up!";
    } else if (lives <= 0) {
      message = "No lives left!";
    } else if (timer <= 0) {
      message = "Time's up!";
    } else {
      message = "Game Over!";
    }

    setTriggerMessage(message); // Set the determined message
    setScore(score); // Example score value for demonstration
    setIsGameOver(true); // Open the modal
  };



  // Handle user pressing a number button
  const handleNumberPress = (value) => {
    if (value === answer) {
      // Correct answer: add 10 seconds and increase score by 10 points
      setScore((prevScore) => {
        const newScore = prevScore + 10;
        setAlertMessage(`Congratulations! You've reached ${newScore} marks.`);
        setAlertBackgroundColor("purple");
        setTimeout(() => setAlertMessage(""), 3000);
        return newScore;
      });

      setFeedbackStatus("correct");
      setTimer((prevTimer) => prevTimer + 10); // Add 10 seconds for correct answer
      setConsecutiveCorrect((prevCount) => prevCount + 1);


      // Grant extra life for 5 consecutive correct answers without a wrong attempt
      if (consecutiveCorrect + 1 === 5 && lives < 3) {
        setLives((prevLives) => prevLives + 1);
        setAlertMessage("Congratulations! You've earned 1 life.");
        setAlertBackgroundColor("green");
        setTimeout(() => setAlertMessage(""), 6000);
        setConsecutiveCorrect(0); // Reset consecutive correct count
      }
      fetchNewQuestion(); // Fetch the next question
    } else {
      // Wrong answer: subtract 5 seconds and decrease score by 5 points
      setScore((prevScore) => Math.max(0, prevScore - 5));
      setLives((prevLives) => prevLives - 1);
      setFeedbackStatus("wrong");
      setTimer((prevTimer) => Math.max(0, prevTimer - 5)); // Subtract 5 seconds for wrong answer
      setWrongAttempts((prevAttempts) => prevAttempts + 1);
      setConsecutiveCorrect(0); // Reset consecutive correct count

      // Reset score to 0 if two wrong attempts for the same question
      if (wrongAttempts + 1 >= 2) {
        setScore(0);
      }

      // Show alert message for wrong answer
      setAlertMessage("Try again! You lost 5 marks and 1 life.");
      setAlertBackgroundColor("red");
      setTimeout(() => setAlertMessage(""), 3000); // Hide message after 3 seconds


    }
  };

  // Timer warning messages when time is 10 or 5 seconds left
  useEffect(() => {
    if (timer === 10) {
      setAlertMessage("Hurry up! Only 10 seconds left!");
      setAlertBackgroundColor("orange");
      setTimeout(() => setAlertMessage(""), 3000);
    } else if (timer === 5) {
      setAlertMessage("Hurry up! Only 5 seconds left!");
      setAlertBackgroundColor("red");
      setTimeout(() => setAlertMessage(""), 3000);
    }
  }, [timer]);
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <View className="w-full flex justify-center items-center h-full px-4">
        <Logo />
        <BgTurnamentPage />

        {/* Display alert messages */}
        {alertMessage && (
          <View
            style={{
              position: "absolute",
              bottom: 20,
              left: 15,
              width: "100%",
              padding: 10,
              backgroundColor: alertBackgroundColor,
              alignItems: "center",
              borderRadius: 50, 
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>{alertMessage}</Text>
          </View>
        )}


        <View style={{ flex: 1, backgroundColor: "#161622" }}>
          {/* Example button to trigger the Game Over modal */}
          <TouchableOpacity onPress={endGame} style={styles.endButton}>
            <Text style={{ color: "white", textAlign: "center" }}>Trigger Game Over</Text>
          </TouchableOpacity>

          {/* Custom Modal for Styled Alert */}
          <Modal visible={isGameOver} transparent animationType="fade">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                {/* Game Logo */}
                <Image source={logo} style={styles.logo} resizeMode="contain" />

                {/* Trigger Message */}
                <Text style={styles.triggerMessage}>{triggerMessage}</Text>

                {/* Score Display */}
                <Text style={styles.scoreText}>Your total score: {score}</Text>

                {/* OK Button to close the modal */}
                <TouchableOpacity
                  style={styles.okButton}
                  onPress={() => {
                    setIsGameOver(false); // Close the modal
                    router.push("/(tabs)/home"); // Navigate to the home page
                  }}
                >
                  <Text style={styles.okButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>


        {/* Timer Display */}
        <Text
          style={{
            position: "absolute",
            top: 140,
            left: 155,
            color: timer <= 5 ? "red" : "white", // Display in red when timer is 5 seconds or less
            fontSize: 20,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          {timer}
        </Text>

        {/* Score Display */}
        <Text style={{ position: "absolute", top: 140, left: 50, color: "white", fontSize: 20, alignItems: "center", alignSelf: "center" }}>
          {score}
        </Text>

        {/* Lives Display */}
        <View style={{ position: "absolute", top: 140, left: 250, flexDirection: "row" }}>
          {Array.from({ length: lives }).map((_, i) => (
            <Image key={i} source={icons.HeartIcon} style={{ width: 20, height: 20, marginRight: 20 }} />
          ))}
        </View>

        {/* Exit Button */}
        <Button
          source={images.ExitBtn}
          style={{
            position: "absolute",
            top: 60,
            left: 300,
            width: 85,
            height: 37,
          }}
          onPress={() => router.push("/(tabs)/home")}
        />

        {/* Skip Button */}
        <Button
          source={images.SkipBtn}
          style={{
            position: "absolute",
            bottom: 70,
            left: 300,
            width: 85,
            height: 37,
          }}
          onPress={() => {
            // Decrease score if needed, fetch new question
            if (score >= 5) {
              setScore((prevScore) => prevScore - 5);
            }
            fetchNewQuestion();
          }}
        />

        {/* Display question image */}
        {questionImage && (
          <Image
            source={{ uri: questionImage }}
            style={{
              position: "absolute",
              top: imagePosition.top,
              left: imagePosition.left,
              width: imagePosition.width,
              height: imagePosition.height,
            }}
            resizeMode="contain"
          />
        )}

        {/* Numeric Buttons (0-9) */}
        {[...Array(10).keys()].map((num) => (
          <NumberButton
            key={num}
            value={num}
            onPress={() => handleNumberPress(num)}
            position={{
              top: 500 + (num % 2) * 80,
              left: 10 + Math.floor(num / 2) * 80,
            }}
          />
        ))}
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Tournament;

/**
 * Stylesheet for the Tournament component
 */
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent dark overlay
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1c1c1e", // Modal background color
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    width: 300, // Width of the modal box
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10, // Space between logo and next element
  },
  triggerMessage: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center", // Center-align the message
  },
  scoreText: {
    color: "#ffd700", // Gold color for the score text
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  okButton: {
    backgroundColor: "#4caf50", // Green color for the button
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20, // Sufficient padding for button size
  },
  okButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  endButton: {
    marginTop: 50,
    backgroundColor: "#444", // Dark gray button for triggering modal
    padding: 10,
    borderRadius: 5,
    alignSelf: "center", // Center the button on the screen
  },
});

