import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Button, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';

const styles = StyleSheet.create({

  text: {
    marginTop: 25,
    marginLeft: 50,
    fontSize: 15,

  },
  text_area: {

    marginTop: 10,
    marginLeft: 50,
    fontSize: 14,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5

  },
  text_main: {

    color: "#145585",
    marginTop: 1,
    marginLeft: 10,
    fontSize: 22,
    flex: 50,
    backgroundColor: "#60aee6",
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    width: 50,
    height: 20,
    marginTop: 150,
    textAlign: 'center',
    backgroundColor: "#ff0000",
    alignItems: 'stretch'


  }

}
)

export default function Teste() {

  return (

    <View >

      <ScrollView>

        <Text style={styles.text_main}>Licença</Text>

        <Text style={styles.text}> Duração em Segundos das imagens</Text>

        <TextInput style={styles.text_area}
          placeholderTextColor="#000"
          placeholder="215-216-217-200cx"
          keyboardAppearance="default"

        >20 </TextInput>

        <Text style={styles.text}> Duração em Segundos das paginas web</Text>

        <TextInput style={styles.text_area}
          placeholderTextColor="#000"
          placeholder="215-216-217-200cx"
          keyboardAppearance="default"

        >20 </TextInput>




        <Button style={{
          
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 50,
          height: 20,
          marginTop: 150,
          textAlign: 'center',
          backgroundColor: "#ff0000",
        }}
          title="Resetar"
          onPress={() => Alert.alert('As configurações foram restauradas')}
        />

        <Button tyle={{

          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 50,
          height: 20,
          marginTop: 150,
          textAlign: 'center',
          backgroundColor: "#ff0000",

        }}
          title="Salvar alterações"
          onPress={() => Alert.alert('As alterações foram realizadas com sucesso')}
        />

      </ScrollView>
    </View>

  );
}