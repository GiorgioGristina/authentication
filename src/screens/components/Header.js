import { View, Text, StyleSheet, useWindowDimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



const Header = () => {

  const {height} = useWindowDimensions

  console.log(height);
  return(
    <SafeAreaView>
      <Text style={styles.brand}>VirtualIE</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  brand: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
})

export default Header