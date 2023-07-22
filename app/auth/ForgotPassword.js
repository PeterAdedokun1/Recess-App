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
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "../../firebase/firebase";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useState } from "react";
const ForgotPassword = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false)
    const validateSchema = yup.object().shape({
      email: yup
        .string()
        .email("Not a valid email address")
        .required("Please enter your email address to continue "),
      
    });
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
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
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async (values) => {
          await sendPasswordResetEmail(values.email);
          setSuccess(true);
        }}
        validationSchema={validateSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ marginHorizontal: 10 }}>
            {success ? (
              <Text style={{textAlign: "center",fontSize: 30}}>Check your email </Text>
            ) : (
              <View>
                <Text style={styles.headerText}>
                  Enter your registered email
                </Text>

                <View style={InputStyles.inputContainer}>
                  <Text style={InputStyles.inputText}>Email</Text>
                  <View style={InputStyles.smallContainer}>
                    <TextInput
                      style={InputStyles.input}
                      placeholder="Enter your Email"
                      keyboardType="email-address"
                      onChangeText={handleChange("email")}
                      value={values.email}
                    />
                    <Image
                      style={{
                        marginBottom: 20,
                      }}
                      source={mail}
                    />
                  </View>
                </View>
                {errors.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}
                <TouchableOpacity
                  style={ButtonStyles.Button}
                  onPress={handleSubmit}
                >
                  <Text style={ButtonStyles.ButtonText}>Send Reset</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </Formik>
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
