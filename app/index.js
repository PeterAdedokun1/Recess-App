import React from 'react'
import { View, Text, SafeAreaView,StyleSheet } from "react-native"
import { Stack, useRouter } from "expo-router"
import { Logo } from '../component'
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
        
          headerLeft: () => <Logo />,
          headerRight: () => <SignUp />,
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