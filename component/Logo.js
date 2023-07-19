import {View, Text, Image} from "react-native"
import LogoImg from "../assest/images/logo.png"

export const Logo = () => {
    return <Image source={LogoImg} style={{marginTop: "10"}} />;
}
