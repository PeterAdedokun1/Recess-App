import React from 'react'
import { View, Text, SafeAreaView,StyleSheet } from "react-native"
import { Stack, useRouter } from "expo-router"
import { SignUpHeaderLeft, SignUpHeaderRight } from '../component'
import { SignUp } from './auth/SignUp'
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#24E4D9",
          },
          headerShadowVisible: false,
          headerTitle: "",

          headerLeft: () => <SignUpHeaderLeft />,
          headerRight: () => <SignUpHeaderRight />,
        }}
      />
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <SignUp />
      </View>
    </SafeAreaView>
  );
}

export default index

const styles = StyleSheet.create({
  heading: {
      backgroundColor:"red"
    }
})