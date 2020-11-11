/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FilePickerManager from 'react-native-file-picker';

export default function selector_midia() {
  const [newList, setNewList] = useState([
    {
      uri: 'https://www.google.com.br/',
      type: 'web',
    },
  ]);

  const buttons = ({item}) => (
    <>
      <TouchableOpacity
        style={styles.button_delete}
        onPress={() => deleteFile(item.uri)}>
        <Text style={styles.text_delete}>Remover </Text>
      </TouchableOpacity>

      <Text style={styles.text_uri}>{item.uri}</Text>
    </>
  );

  function deleteFile(uriObj) {
    var i = newList.findIndex((x) => x.uri === uriObj);
    var listUri = [...newList];
    listUri.splice(i, 1);
    setNewList(listUri);
  }

  function selectFile() {
    FilePickerManager.showFilePicker(null, async (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        setNewList(
          [
            {
              uri: response.uri,
              type: response.type,
            },
          ].concat(newList),
        );
        var someArray = newList;
        await AsyncStorage.setItem('someArrayName', JSON.stringify(someArray));
        var someArrayString = await AsyncStorage.getItem('someArrayName');
        var someArray = JSON.parse(someArrayString);
        console.log(someArray);
      }
    });
  }
  return (
    <>
      {!newList ? (
        <>
          <View style={styles.top}>
            <Text style={styles.text_main}>
              Selecione as mídias para o player
            </Text>
          </View>

          <TouchableOpacity style={styles.button_main} onPress={selectFile}>
            <Text style={styles.text_main2}>+ Adicionar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.top}>
            <Text style={styles.text_main}>
              Selecione as mídias para o player
            </Text>
          </View>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={newList}
              renderItem={buttons}
              keyExtractor={(item) => item.uri}
            />

            <TouchableOpacity style={styles.button_main} onPress={selectFile}>
              <Image source- />
              <Text style={styles.text_main2}>Adicionar</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
  text_main: {
    color: '#145585',
    marginTop: 35,
    marginBottom: 35,
    marginLeft: 50,
    fontSize: 19,
  },

  text_main2: {
    color: '#145585',
    marginTop: 9,
    marginLeft: 10,
    fontSize: 18,
  },

  text_delete: {
    color: '#fff',
    marginTop: 9,
    fontSize: 18,
  },

  text_uri: {
    color: '#145585',
    fontSize: 15,
    textAlign: 'center',
  },

  top: {
    top: 0,
    backgroundColor: '#60aee6',
  },
  button_delete: {
    width: 300,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#E51919',
    marginTop: 50,
  },

  button_main: {
    width: 300,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#60aee6',
    marginBottom: 6,
    marginTop: 20,
  },

  container: {
    alignItems: 'center',
  },
});
