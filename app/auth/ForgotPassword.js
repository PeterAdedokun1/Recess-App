import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Stack, useRouter } from "expo-router";
import { Back, Button, Input } from "../../component";
import { useState } from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const [tabs, SetTabs] = useState(0);
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
          <Text style={styles.headerText}>
            Enter your registered email or phone number
          </Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{ marginHorizontal: 10 }}
              onPress={() => SetTabs(0)}
            >
              <Text>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => SetTabs(1)}>
              <Text>Phone</Text>
            </TouchableOpacity>
          </View>

          {tabs === 0 && (
            <View>
              <Input title="Email" placeholder="Enter Email" />
              <Button text={"Send Reset"} />
            </View>
          )}
          {tabs === 1 && (
            <View>
              <Input title="Password" placeholder="Enter Email" />
              <Button text={"Send Reset"} />
            </View>
          )}
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
