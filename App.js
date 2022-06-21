import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen  />
      
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 25,
  }
});
