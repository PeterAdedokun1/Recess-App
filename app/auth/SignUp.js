import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Platform,SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#24E4D9",
          },
          headerShadowVisible: false,
          headerTitle: ""
        }}
      />
    </SafeAreaView>
  );
}

export default SignUp