import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { UserSection, PlusIcon } from "../../component";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
      {user && (
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
      )}
    </SafeAreaView>
  );
};

export default Home;
