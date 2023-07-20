import React from 'react'
import { View, Text, TouchableOpacity, Image , StyleSheet} from 'react-native'
import BackImg from "../assest/images/back.png";
const Back = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={BackImg} />
    </TouchableOpacity>
  );
};

export default Back