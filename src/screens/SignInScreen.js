import { useState } from "react"
import { View, Text } from "react-native"
import { SafeAreaView, ScrollView } from "react-native"
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
    <ScrollView>
    <SafeAreaView style={{marginHorizontal: 25}}>
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
      <CustomButton 
        onPress={onForgotPasswordPress}
        text="Sign In with Google"
        // type="tertiary"
        bgColor="#fae9ea"
        textColor="#dd4d44"
      />
      <CustomButton 
        onPress={onForgotPasswordPress}
        text="Sign In with Facebook"
        // type="tertiary"
        bgColor="#e7eaf4"
        textColor="#4765a9"
      />
      <CustomButton 
        onPress={onForgotPasswordPress}
        text="Don't have an account? Create one"
        type="tertiary"
      />

    </SafeAreaView>
    </ScrollView>
  )
} 


export default SignInScreen