import { StyleSheet, TextInput, View } from "react-native"


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return(
    <View style={styles.container}>
      <TextInput 
      onChange={setValue}
      style={styles.input} 
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#e8e8e8",
    marginVertical: 5,
  },
  input: {
  }

})

export default CustomInput