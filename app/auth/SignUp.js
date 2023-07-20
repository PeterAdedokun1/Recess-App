import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Platform,SafeAreaView,Image } from 'react-native'
import { Stack,useRouter } from 'expo-router'

import { Back } from '../../component'
const SignUp = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#24E4D9",
          },
          headerShadowVisible: false,
          headerTitle: "Sign Up",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerBackVisible: false,
          headerLeft: () => <Back handlePress={() => router.back()} />,
        }}
      />
    </SafeAreaView>
  );
}

export default SignUp