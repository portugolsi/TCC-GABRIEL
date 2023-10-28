import {View,Text,Image} from "react-native";
import styles from "../styles/FooterCSS";


export default function Footer(){
    return(

        <View style={styles.footer}>
            <Image source={require('../images/home.png')} style={{width: 30, height:30}} ></Image>
            <Image source={require('../images/lupa.png')} style={{width: 30, height:30}} ></Image>
            <Image source={require('../images/add.png')} style={{width: 30, height:30}} ></Image>
            <Image source={require('../images/heart.png')} style={{width: 30, height:30}} ></Image>
            <Image source={require('../images/profile.png')} style={{width: 30, height:30}} ></Image> 
        </View>
    )
}