import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { UserSection, PlusIcon } from "../../component";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#24E4D9",
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => <UserSection />,
          headerRight: () => <PlusIcon />,
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
