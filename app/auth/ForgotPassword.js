import { View, Text ,SafeAreaView,StyleSheet} from "react-native";

import { Stack } from "expo-router";
import { Back } from "../../component";

const ForgotPassword = () => {
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
        }}
      />
          <View style={{ marginHorizontal: 10 }}>
              
      </View>
    </SafeAreaView>
  );
}

export default ForgotPassword

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