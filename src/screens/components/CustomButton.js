import { Text, View, StyleSheet, Pressable } from "react-native"

const CustomButton = ({onPress, text, type, bgColor, textColor}) => {

  // const TypeOfButton = type === 'primary' ? 'primary' : 'tertiary'

  return(
    <Pressable 
      onPress={onPress} 
      style={[styles.container, 
              styles[`container_${type}`],
              bgColor ? {backgroundColor: bgColor} : {}
            ]}
    >
      <Text style={[styles.text,
                    styles[`text_${type}`],
                    textColor ? {color: textColor} : {}
                  ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {   
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    // borderWidth:1,
    alignItems: "center",
  },
  container_primary: {
    backgroundColor: "#3b71fe",
  },
  container_tertiary: {

  },
  text: {
    fontWeight: "bold",
  },
  text_primary: {
    color: "white",

  },
  text_tertiary: {
    color: "grey"
  }
})

export default CustomButton