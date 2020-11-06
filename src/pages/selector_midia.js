import React from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView, TouchableOpacity, } from 'react-native';

const styles = StyleSheet.create({

    text_main: {

        color: "#000"

    },

})

export default function selector_midia() {

    return (
        <View>

            <ScrollView>

            <Text style={styles.text_main}>Selecione as mídias para o player</Text>

            </ScrollView>

        </View>
    )
}
