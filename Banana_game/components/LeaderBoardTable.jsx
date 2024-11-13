// components/LeaderBoardTable.js
import React from "react";
import { View, Text, Image, FlatList } from "react-native";

const LeaderboardTable = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.rank.toString()}
    renderItem={({ item }) => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: "gray",
        }}
      >
        <Text style={{ color: "white", width: "15%", textAlign: "center" }}>
          {item.rank}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", width: "50%" }}>
          <Image
            source={item.player.image}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
              borderWidth: 1,
              borderColor: "white",
            }}
          />
          <Text style={{ color: "white" }}>{item.player.name}</Text>
        </View>
        <Text style={{ color: "white", width: "20%", textAlign: "center" }}>
          {item.score}
        </Text>
      </View>
    )}
    showsVerticalScrollIndicator={false}
    style={{ maxHeight: 300 }}
  />
);

export default LeaderboardTable;
