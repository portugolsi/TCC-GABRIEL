import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import Login from './src/pages/Login';


export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
