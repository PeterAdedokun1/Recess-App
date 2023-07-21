import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import { Stack, useRouter } from "expo-router";
import { Back, Button, Input } from "../../component";
import { ButtonStyles } from "../../styles/ButtonStyles";
import { InputStyles } from "../../styles/InputStyles";
import mail from "../../assest/images/mail.png";
const ForgotPassword = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#24E4D9",
          },
          headerShadowVisible: false,
          headerTitle: "Forgot Password",
          headerLeft: () => <Back handlePress={() => router.back()} />,
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <View style={{ marginHorizontal: 10 }}>
        <View>
          <Text style={styles.headerText}>Enter your registered email</Text>
          <View style={InputStyles.inputContainer}>
            <Text style={InputStyles.inputText}>Email</Text>
            <View style={InputStyles.smallContainer}>
              <TextInput
                style={InputStyles.input}
                placeholder="Enter your Email"
                keyboardType="email-address"
              />
              <Image
                style={{
                  marginBottom: 20,
                }}
                source={mail}
              />
            </View>
          </View>
          <TouchableOpacity style={ButtonStyles.Button}>
            <Text style={ButtonStyles.ButtonText}>Send Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  headerText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
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
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
