import { Text, View, StyleSheet, Pressable } from "react-native"

const CustomButton = ({onPress, text}) => {
  return(
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3b71fe",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  }
})

export default CustomButton