import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import Google from "../../assest/images/Google.png";
import Facebook from "../../assest/images/Facebook.png";
import Apple from "../../assest/images/Apple.png";
import { InputStyles } from "../../styles/InputStyles";
import mail from "../../assest/images/mail.png";
import password from "../../assest/images/password.png";
import { ButtonStyles } from "../../styles/ButtonStyles";
import { footerStyles } from "../../styles/FooterStyles";
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "../../firebase/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "../../firebase/error";
import AsyncStorage from "@react-native-async-storage/async-storage";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case letter , 1 lower case,1 numeric digit

export const SignIn = () => {
  const router = useRouter();
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Not a valid email address")
      .required("Please enter an email address to continue "),
    password: yup.string().required("Please enter your password"),
  });
  //  const localStorage = async (user) => {
  //    try {
  //      await AsyncStorage.setItem("user", JSON.stringify(user));
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  
  
  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Data saved successfully.");
    } catch (error) {
      console.log("Error saving data: ", error);
    }
  };
    useEffect(() => {
      if (user) {
        saveData("user", JSON.stringify( user))
        setTimeout(() => {
          router.replace("/dashboard/Home");
        }, 2000);
      }
    }, [user]);

 
  return (
    <ScrollView>
      <Text style={styles.headerText}>
        Enter your email & choose {"\n"} you password
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          signInWithEmailAndPassword(values.email, values.password);
        }}
        validationSchema={validateSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            {error && (
              <Text style={{ color: "red", textAlign: "center" }}>
                {FIREBASE_ERRORS[error.message]}
              </Text>
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
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email}</Text>
            )}
            <View style={InputStyles.inputContainer}>
              <Text style={InputStyles.inputText}>Password</Text>
              <View style={InputStyles.smallContainer}>
                <TextInput
                  style={InputStyles.input}
                  placeholder="Password"
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
            <View style={styles.forgotPassword}>
              <View>
                <Text>Remember Me</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/auth/ForgotPassword")}
              >
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={ButtonStyles.Button}
              onPress={handleSubmit}
            >
              <Text style={ButtonStyles.ButtonText}>
                {loading ? "loading....." : " Sign In"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={styles.DividerContainer}>
        <Text
          style={{ width: "32.3%", height: 1, backgroundColor: "white" }}
        ></Text>
        <Text style={{ textAlign: "center" }}>or continue with</Text>
        <Text
          style={{ width: "32.3%", height: 1, backgroundColor: "white" }}
        ></Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image source={Google} />
        <Image source={Facebook} style={{ marginHorizontal: 25 }} />
        <Image source={Apple} />
      </View>

      <View style={footerStyles.footerContainer}>
        <Text style={footerStyles.footer}>New to Recess?</Text>
        <TouchableOpacity>
          <Text
            style={footerStyles.link}
            onPress={() => router.push("/auth/SignUp")}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginVertical: 10,
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
    marginTop: 15,
  },
  ImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
});
