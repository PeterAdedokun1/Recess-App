import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { Button, Input } from "../../component";
import { useRouter } from "expo-router";
import Google from "../../assest/images/Google.png";
import Facebook from "../../assest/images/Facebook.png";
import Apple from "../../assest/images/Apple.png";

export const SignIn = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={styles.headerText}>
        Enter your email & choose {"\n"} you password
      </Text>

      <Input title="Email" placeholder="Enter Email" />
      <Input title="Phone Number" placeholder="Enter Password" />
      <Input title="Password" placeholder="Enter Password" />

      <View style={styles.forgotPassword}>
        <View>
          {/* <CheckBox /> */}
          <Text>Remember Me</Text>
        </View>
        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <Button text={"Sign In"} />
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

      {/* footer section */}
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>New to Recess?</Text>
        <TouchableOpacity>
          <Text
            style={styles.SignUp}
            onPress={() => router.push("/auth/SignUp")}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 60,
    fontSize: 25,
    fontWeight: "400",
    marginVertical: 10,
  },
  footer: {
    textAlign: "center",

    display: "flex",
    justifyContent: "center",
    fontSize: 16,
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
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
