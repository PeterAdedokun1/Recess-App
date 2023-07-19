import React from 'react'
import { View, Text, SafeAreaView,StyleSheet } from "react-native"
import { Stack, useRouter } from "expo-router"
import { SignUpHeaderLeft, SignUpHeaderRight } from '../component'
import { SignUp } from './auth/SignUp'
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white",  }}>
      <Stack.Screen
        
        options={{
          headerStyle: {
            // backgroundColor: "white",
          },
          headerShadowVisible: false,
          headerTitle: "",
        
          headerLeft: () => <SignUpHeaderLeft />,
          headerRight: () => <SignUpHeaderRight />,
        }}
      ></Stack.Screen>
    </SafeAreaView>
  );
}

export default index

const styles = StyleSheet.create({
  heading: {
      backgroundColor:"red"
    }
})