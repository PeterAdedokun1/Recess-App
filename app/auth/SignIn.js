import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button, Input } from "../../component";
import { useRouter } from "expo-router";

export const SignIn = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={styles.headerText}>
        Enter your email & choose {"\n"} you password
      </Text>

      <Input title="Email" placeholder="Enter Email" />
      <Input title="Password" placeholder="Enter Password" />
      <Button text={"Sign In"} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.footer}>New to Today?</Text>
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
    marginVertical: 40,
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
    fontWeight: "500",
  },
});
