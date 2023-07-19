import React from 'react'
import { Image } from 'react-native';
import LogoImg from "../assest/images/logo.png";
export const SignUpHeaderLeft = () => {
  return (
      <Image source={LogoImg} style={{ marginTop: 30, margin: 0 }} />
  )
}
