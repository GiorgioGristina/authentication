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

  const onForgotPasswordPress = () => {
    console.log("Forgot Password");
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
        type="primary"

      />
      <CustomButton 
        onPress={onForgotPasswordPress}
        text="Forgot password?"
        type="tertiary"
      />

    </SafeAreaView>
  )
} 


export default SignInScreen