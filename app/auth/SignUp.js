import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Platform,SafeAreaView,Image } from 'react-native'
import { Stack,useRouter } from 'expo-router'
import Google from "../../assest/images/Google.png";
import Facebook from "../../assest/images/Facebook.png";
import Apple from "../../assest/images/Apple.png";
import { Back, Button, Input } from '../../component'
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
      <View style={{ marginHorizontal: 10 }}>
        <View>
          <Text style={styles.headerText}>Create your account</Text>

          <Input title="Email" placeholder="Enter Email" />
          <Input title="Phone Number" placeholder="Enter Password" />
          <Input title="Password" placeholder="Enter Password" />
          <Input title="Confirm Password" placeholder="Enter Password" />

          <View style={styles.forgotPassword}>
            <View>
              {/* <CheckBox /> */}
              <Text>
                I agree to Recess Terms of service and Privacy Policy.
              </Text>
            </View>
          </View>

          <Button text={"Sign Up"} />
          {/* divider section */}
          <View style={styles.DividerContainer}>
            <Text
              style={{ width: "32.3%", height: 1, backgroundColor: "white" }}
            ></Text>
            <Text style={{ textAlign: "center" }}>or continue with</Text>
            <Text
              style={{ width: "32.3%", height: 1, backgroundColor: "white" }}
            ></Text>
          </View>

          {/* image section */}

          <View style={styles.ImageContainer}>
            <Image source={Google} />
            <Image source={Facebook} style={{ marginHorizontal: 25 }} />
            <Image source={Apple} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignUp

const styles = StyleSheet.create({
  headerText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    // marginTop: 60,
    fontSize: 25,
    fontWeight: "400",
    marginVertical: 20,
  },
 
  SignUp: {
    color: "#2DC6FF",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    alignItems: "center",
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
 
  DividerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  ImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
  },
});