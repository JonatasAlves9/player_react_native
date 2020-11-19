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
        marginLeft: 245,
        borderRadius: 10,

    },
    button_main: {

        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#0076A3',
        padding: 30,
        margin: 150,
        marginTop: 10,
        borderRadius: 10


    },


    text_main: {

        color: "#145585",
        marginLeft: 250,
        fontSize: 18,
        marginTop: -150,



    },
    text_main2: {

        color: "#000",
        marginLeft: 250,
        fontSize: 18,
        marginTop: 10



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
                <Text style={styles.text_main}> Selecionar Mídias </Text>
                    </TouchableOpacity>

            <TouchableOpacity style={styles.button_main}
                title="Iniciar Player" />
            <Text style={styles.text_main}> Iniciar Player </Text>

            <TouchableOpacity style={styles.button_main}
                title="Configurações"
                onPress={() => navigation.navigate('Config')} />
            <Text style={styles.text_main}> Configurações </Text>

            <TouchableOpacity style={styles.button_main}
                onPress={() => navigation.navigate('Teste')} />
            <Text style={styles.text_main}> Selecionar Mídias </Text>

            </ScrollView>

        </View >

    );
}