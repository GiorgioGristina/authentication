import { useState } from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native"
import CustomButton from "./components/CustomButton"
import CustomInput from "./components/CustomInput"
import Header from "./components/Header"


const SignInScreen = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // console.log(username);
  const onSignInPress = () => {
    console.log("sign-in");
  }

  return(
    <SafeAreaView>
      <Header />
      <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername}
      />
      <CustomInput 
        placeholder="Password"
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton 
        onPress={onSignInPress}
        text="Sign In"
      />

    </SafeAreaView>
  )
} 


export default SignInScreen