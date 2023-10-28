import {View,Text,TextInput} from "react-native";
import { Button } from "react-native-paper";
import styles from "../styles/LoginCSS";


export default function Login(){
    return(

        <View style={styles.cardLogin}>

            <Text style={styles.tituloLogin} >Faça o Login</Text>

            <View >   
                <TextInput
                style={styles.inputsLogin}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                //onChangeText={(email) => setEmail(email)}
                /> 
            </View> 
            <View >
                <TextInput
                style={styles.inputsLogin}
                placeholder="Password."
                
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                
                //onChangeText={(password) => setPassword(password)}
                /> 
            </View>
            
            <View>
                <Button >Entrar</Button>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center'}}>Ou</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>

        </View>
    )
}