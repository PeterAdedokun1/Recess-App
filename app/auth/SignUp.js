import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "../../component";
export const SignUp = () => {
  return (
    <View>
      <Text style={styles.headerText}>
        Enter your email & choose {"\n"} you password
      </Text>

          <Button
              text={"Sign In"}
          />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.footer}>New to Today?</Text>
        <TouchableOpacity>
          <Text style={styles.SignUp}>Sign Up</Text>
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
