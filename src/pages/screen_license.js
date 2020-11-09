import React from 'react';
import {
    Text, View, Image, StyleSheet, Button, ScrollView, TouchableOpacity, TextInput
} from 'react-native';

const styles = StyleSheet.create({

    text_main: {

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
    text_: {

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

export default function selector_midia() {

    return (
        <>

            <View style={styles.top}>


                <Text style={styles.text_main}>Licença</Text>

            </View>

            <View style={styles.text_}>

                <Text>Digite sua licença</Text>

            </View>

            <View style={styles.text_}>

                <TextInput style={styles.text_input}
                    placeholderTextColor="#000"
                    placeholder="215-216-217-200cx"
                    keyboardAppearance="default"

                />

            </View>
        </>

    )
}