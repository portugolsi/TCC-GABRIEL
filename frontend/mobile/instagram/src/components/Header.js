import {View,Text,Image} from "react-native";
import styles from "../styles/HeaderCSS";


export default function Header(){
    return(

        <View style={styles.header}>
            <Image source={require('../images/logo.png')} style = {{width: 160, height: 45}} />

            <Image source={require('../images/message-logo.png')} style={{width: 30, height:30}} ></Image>
        </View>
    )
}