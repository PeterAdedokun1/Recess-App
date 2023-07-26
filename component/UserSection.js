import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { View, Image, Text } from "react-native";
import { auth } from "../firebase/firebase";
import user from "../assest/images/user-img.png";
const UserSection = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  return (
    <View>
      
      {user && <Text>This is home page brother</Text>}
      <Image source={user} />
      <View>
        <Text>Hello there</Text>
        {/* <Text> {user.displayName || user.email?.split("@")[0]}</Text> */}
      </View>
    </View>
  );
};

export default UserSection;
