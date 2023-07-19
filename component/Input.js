import { View, Text, TextInput, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Input = ({ title, placeholder }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{title}</Text>
      <View style={styles.smallContainer}>
        <TextInput style={styles.input} placeholder={placeholder} />
        <Octicons
          name="mail"
          size={20}
          style={{
            height: "100%",
            marginBottom: 5,
          }}
          color="black"
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#E9EBF8",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 1,
    marginTop: 15,
  },
  input: {
    height: 100,
    borderWidth: 0,
    margin: 0,
    width: "90%",
    color: "black",
    fontSize: 20,
  },
  inputText: {
    marginTop: 5,
    fontSize: 15,
    color: "#111315",
  },
  smallContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: "100%",
  },
});
