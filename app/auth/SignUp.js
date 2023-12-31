import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { Back } from "../../component";
import { InputStyles } from "../../styles/InputStyles";
import mail from "../../assest/images/mail.png";
import password from "../../assest/images/password.png";
import { footerStyles } from "../../styles/FooterStyles";
import { ButtonStyles } from "../../styles/ButtonStyles";
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "../../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "../../firebase/error";
import { AuthImage } from "../../component/AuthImage";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case letter , 1 lower case,1 numeric digit
const SignUp = () => {
  const router = useRouter();
  const [createUserWithEmailAndPassword, user , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const validateSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    email: yup
      .string()
      .email("Not a valid email address")
      .required("Please enter an email address to continue "),
    password: yup
      .string()
      .min(6)
      .matches(passwordRules, {
        message: "Your password must container uppercase, lowercase & numbers",
      })
      .required("Please enter your password"),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref("password"), null], "Password must match")
    //   .required("please confirm your password"),
  });
  return (
    <SafeAreaView style={{ backgroundColor: "#24E4D9" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#24E4D9",
          },
          headerShadowVisible: false,
          headerTitle: "Sign Up",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerLeft: () => <Back handlePress={() => router.back()} />,
        }}
      />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          createUserWithEmailAndPassword(values.email, values.password);
        }}
        validationSchema={validateSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <ScrollView style={{ marginHorizontal: 10 }}>
            <View>
              <Text style={styles.headerText}>Create your account</Text>
              <View style={InputStyles.inputContainer}>
                <Text style={InputStyles.inputText}>Name</Text>
                <View style={InputStyles.smallContainer}>
                  <TextInput
                    style={InputStyles.input}
                    placeholder="Enter your name"
                    onChangeText={handleChange("name")}
                    value={values.name}
                  />
                  <Image
                    style={{
                      marginBottom: 20,
                    }}
                    source={user}
                  />
                </View>
              </View>
              {errors.name && (
                <Text style={{ color: "red" }}>{errors.name}</Text>
              )}
              <View style={InputStyles.inputContainer}>
                <Text style={InputStyles.inputText}>Email</Text>
                <View style={InputStyles.smallContainer}>
                  <TextInput
                    style={InputStyles.input}
                    placeholder="Enter your email"
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

              {errors.email &&
                // && error(
                  <Text style={{ color: "red" }}>
                    {errors.email || FIREBASE_ERRORS[error.message]}
                  </Text>
                // )
                }
              <View style={InputStyles.inputContainer}>
                <Text style={InputStyles.inputText}>Password</Text>
                <View style={InputStyles.smallContainer}>
                  <TextInput
                    style={InputStyles.input}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  <Image
                    style={{
                      marginBottom: 20,
                    }}
                    source={password}
                  />
                </View>
              </View>
              {errors.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}
              <View style={InputStyles.inputContainer}>
                <Text style={InputStyles.inputText}>Confirm Password</Text>
                <View style={InputStyles.smallContainer}>
                  <TextInput
                    style={InputStyles.input}
                    placeholder="Enter your confirm password"
                    secureTextEntry={true}
                    onChangeText={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                  />
                  <Image
                    style={{
                      marginBottom: 20,
                    }}
                    source={password}
                  />
                </View>
              </View>
              {errors.confirmPassword && (
                <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
              )}
              <View style={styles.forgotPassword}>
                <View>
                  <Text>
                    I agree to Recess Terms of service and Privacy Policy.
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={ButtonStyles.Button}
                onPress={handleSubmit}
              >
                <Text style={ButtonStyles.ButtonText}>
                  {loading ? "loading....." : " Sign Up"}
                </Text>
               
              </TouchableOpacity>

              <View style={styles.DividerContainer}>
                <Text
                  style={{
                    width: "32.3%",
                    height: 1,
                    backgroundColor: "white",
                  }}
                ></Text>
                <Text style={{ textAlign: "center" }}>or continue with</Text>
                <Text
                  style={{
                    width: "32.3%",
                    height: 1,
                    backgroundColor: "white",
                  }}
                ></Text>
              </View>
              <AuthImage />
            </View>
            <View style={footerStyles.footerContainer}>
              <Text style={footerStyles.footer}>Already have an account?</Text>
              <TouchableOpacity>
                <Text
                  style={footerStyles.link}
                  onPress={() => router.push("/")}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  headerText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "400",
    marginVertical: 10,
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
