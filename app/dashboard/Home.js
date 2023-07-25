import { View,Text ,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

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
          // headerLeft: () => 
          // headerRight: () => 
        }}

      />
    </SafeAreaView>
  );
}

export default Home
