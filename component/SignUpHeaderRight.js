import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export const SignUpHeaderRight = () => {
  return (
    <TouchableOpacity style={styles.BtnContainer}>
      <Text style={styles.BtnText}>Sign up</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BtnContainer: {
    fontWeight: "900",
    borderWidth: 1,
    borderColor: "#111315",
    paddingHorizontal: 17,
    paddingVertical: 8,
    borderRadius: 20,
  },
  BtnText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
