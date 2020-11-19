import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({

  text: {
    marginTop: 80,
    marginLeft: 50,
    fontSize: 15,

  },
  text_area: {

    marginTop: 10,
    marginLeft: 50,
    fontSize: 14,
    height: 40,
    borderColor: 'gray',
    borderWidth:1,
    margin: 5

  },
  text_main: {

    color: "#145585",
    marginTop: 16,
    marginLeft: 50,
    fontSize: 19,
  },
  top: {

    flex: 0.3,
    backgroundColor: "#60aee6",
  }

}
)



export default function Teste() {

  return (

    <View style={styles.top}>

      <Text style={styles.text_main}>Licença</Text>

<Text style={styles.text}> Digite sua licença</Text>



      <TextInput style={styles.text_area}
        placeholderTextColor="#000"
        placeholder="215-216-217-200cx"
        keyboardAppearance="default"
        

      >256.257.258cx </TextInput>





    </View>

  );
}