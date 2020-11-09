import React from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView, TouchableOpacity, } from 'react-native';

const styles = StyleSheet.create({

    text_main: {

        color: "#145585",
        marginTop: 35,
        marginLeft: 50,
        fontSize: 19,

    },

    text_main2: {

        color: "#145585",
        marginTop: 9,
        marginLeft: 10,
        fontSize: 18,

    },

    top: {

        flex: 0.3,
        backgroundColor: "#60aee6",
        
    },

    button_main: {

        width: 400,
        borderRadius: 6,
        marginLeft: 150,
        marginRight: 50,
        alignItems: "center",
        backgroundColor: "#60aee6",
        marginBottom: 6,
        marginTop: 160,

    },
     

})

export default function selector_midia() {

    return (
        <View style={styles.top}>

            

            <Text style={styles.text_main}>Selecione as mídias para o player</Text>

            <TouchableOpacity style={styles.button_main}>
            
                    <Text style={styles.text_main2}>+ Adicionar</Text>

                </TouchableOpacity>

        </View>
    )
}
