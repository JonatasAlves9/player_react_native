import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const styles = StyleSheet.create({

    header_text: {

        color: "#145585",
        marginTop: 16,
        marginLeft: 50,
        fontSize: 19,

    },

    text_input: {

        marginEnd:20,
        height: 20,
        borderColor: '#000',
        borderWidth: 1,
        marginHorizontal: 5,

    },
    license_text: {

        color: "#145585",
        marginTop: 30,
        marginLeft: 20,
        fontSize: 18,

    },


    top: {

        flex: 0.3,
        backgroundColor: "#60aee6",

    },


})

export default function Screen () {

    return (

        <View>
    
          <Text>Esse é o componente é apenas para teste</Text>
    
        </View>
    
      );
    }