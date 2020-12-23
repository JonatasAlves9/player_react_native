import React from 'react';
import {
    Text, View, Image, SafeAreaView, StyleSheet, Button,
    ScrollView, TouchableOpacity, TextInput
} from 'react-native';



const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginTop: 20,
        marginEnd: 60,
        marginLeft: 230,
        borderRadius: 10,

    },
    button_main: {

        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#0076A3',
        padding: 20,
        margin: 150,
        marginTop: -5,
        borderRadius: 10,


    },


})


export default function Main({ navigation }) {


    return (

        <View>

            <ScrollView>

                <Image
                    style={styles.logo}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsaHU8TF4AhoPjRyiHLqWapAjUVWNT0M043g&usqp=CAU' }}
                />

                <TouchableOpacity style={styles.button_main}
                    onPress={() => navigation.navigate('Selector_midia')} >
                    <Text> Selecionar Mídias </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main}
                    onPress={() => navigation.navigate('')} >
                    <Text> Iniciar Player </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main}
                    onPress={() => navigation.navigate('Config')} >
                    <Text> Configurações </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main}
                    onPress={() => navigation.navigate('Teste')} >
                    <Text> Licença </Text>
                </TouchableOpacity>


            </ScrollView>

        </View >

    );
}