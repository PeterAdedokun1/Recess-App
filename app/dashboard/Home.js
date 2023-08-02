import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { UserSection, PlusIcon } from "../../component";
import { auth } from "../../firebase/firebase";
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
      <View>
        <Text>okgnmmmjhff;;ncBnnbxxzaawrn. xdn,lll</Text>
     
      </View>
    </SafeAreaView>
  );
};

export default Home;
