import React from 'react'
import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native'
import Facebook from "../assest/images/Facebook.png";
import Apple from "../assest/images/Apple.png";
import Google from "../assest/images/Google.png"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
export const AuthImage = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <View style={styles.ImageContainer}>
      <TouchableOpacity onPress={async() => signInWithGoogle()}>
        <Image source={Google} />
      </TouchableOpacity>
      <Image source={Facebook} style={{ marginHorizontal: 25 }} />
      <Image source={Apple} />
    </View>
  );
}
const styles = StyleSheet.create({
  ImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 18,
  },
});