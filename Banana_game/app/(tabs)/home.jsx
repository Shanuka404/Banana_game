import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions} from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="bg-darkGreen h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center  h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Banana
          </Text>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home