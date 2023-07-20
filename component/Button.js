import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export const Button = ({ text }) => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Text style={styles.ButtonText}>{text }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: "black",
    padding: 16,
        borderRadius: 160,
    marginTop: 20,
  },
  ButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
});
