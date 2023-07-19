import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button } from "../../component";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons"; 
export const SignUp = () => {
  return (
    <View>
      <Text style={styles.headerText}>
        Enter your email & choose {"\n"} you password
      </Text>

      <View style={styles.inputContainer}>
        <Text style={{ marginTop: 5, fontSize: 15 }}>Email</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 40,
            width: "100%",
          }}
        >
          <TextInput style={styles.input} placeholder="this is a placeholder" />

          <Octicons
            name="mail"
            size={20}
            style={{
            //   marginRight: 10,
            //   width: "20%",
              height: "100%",
              marginBottom: 15,
            }}
            color="black"
          />
          <AntDesign name="mail" size={24} color="black" />

          {/* <Text style={{marginBottom: 40}}>O</Text> */}
        </View>
      </View>

      {/* <Button text={"Sign In"} /> */}
      {/* <View
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
      </View> */}
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
    fontWeight: "300",
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
  inputContainer: {
    // flexDirection: 'row',
    // display: "flex",
    // width: "100%",
    // backgroundColor: "red",
    backgroundColor: "#E9EBF8",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 1,
    //   marginVertical: 10
  },
  input: {
    height: 100,
    // margin: 12,
    borderWidth: 0,
    // padding: 10,
    margin: 0,
    width: "90%",
    color: "black",
    fontSize: 20,
  },
});
