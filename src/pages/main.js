import React from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView, TouchableOpacity, } from 'react-native';



const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 232,
        borderRadius: 10,



    },
    button_main: {

        width: 400,
        borderRadius: 6,
        marginLeft: 150,
        marginRight: 50,
        alignItems: "center",
        backgroundColor: "#336487",
        marginBottom: 10,

    },
    text_main: {

        color: "#fff"

    },

})


export default function main() {

    return (
        <View>

            <ScrollView>


                <Image
                    style={styles.logo}
                    source={{
                        uri:
                            'https://professor-falken.com/wp-content/uploads/2016/05/Como-insertar-un-video-de-Youtube-en-tu-pagina-web-professor-falken.com_.jpg',
                    }}
                />

                <TouchableOpacity style={styles.button_main}>

                    <Text style={styles.text_main}>Selecionar Mídia</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main}>

                    <Text style={styles.text_main}>Iniciar Player</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main}>

                    <Text style={styles.text_main}>Configurações</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.button_main}>

                    <Text style={styles.text_main}>Licença</Text>

                </TouchableOpacity>

            </ScrollView>

        </View>


    )


}