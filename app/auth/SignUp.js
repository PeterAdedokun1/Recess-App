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
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Google from "../../assest/images/Google.png";
import Facebook from "../../assest/images/Facebook.png";
import Apple from "../../assest/images/Apple.png";
import { Back, Button } from "../../component";
import { InputStyles } from "../../styles/InputStyles";
import mail from "../../assest/images/mail.png";
import user from "../../assest/images/user.png";
import password from "../../assest/images/password.png";
import { footerStyles } from "../../styles/FooterStyles";
import { ButtonStyles } from "../../styles/ButtonStyles";
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "../../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case letter , 1 lower case,1 numeric digit
const SignUp = () => {
  const router = useRouter();
  const [createUserWithEmailAndPassword, user, loading, error] =
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
      // .matches(passwordRules, {
      //   message: "Your password must container uppercase, lowercase & numbers",
      // })
      .required("Please enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match")
      .required("please confirm your password"),
  });
  console.log("kljshjhdj")
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#24E4D9" }}>
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
          headerBackVisible: false,
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
        onSubmit={(values) =>
          createUserWithEmailAndPassword(values.email, values.password)
        
        }
        validationSchema={validateSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ marginHorizontal: 10 }}>
            <View>
              <Text style={styles.headerText}>Create your account</Text>

              {/* input */}
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
              {errors.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}

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

              {/* <CheckBox /> */}
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
              {/* divider section */}
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

              {/* image section */}
              <View style={styles.ImageContainer}>
                <Image source={Google} />
                <Image source={Facebook} style={{ marginHorizontal: 25 }} />
                <Image source={Apple} />
              </View>
            </View>
            {/* footer section */}
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
          </View>
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
