import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import Video from 'react-native-video';
import FilePickerManager from 'react-native-file-picker';

const App = () => {
  const [type, setType] = useState(3);
  const [url, setUrl] = useState('');
  const [newList, setNewList] = useState([]);
  const [fila1, SetFila1] = useState([]);

  function onEnd(fila) {
    fila === fila++;
    const size = newList.length;
    console.log('OnEnd' + fila, size);
    console.log(fila + 1);
    if (fila === size) {
      fila === 0;
      console.log('------------OnEnd** Resetou indice:' + fila);
      setType(3);
    } else {
      verifyType(fila);
    }
  }

  function teste() {
    setTimeout(console.log('teste'), 5000);
  }

  function start() {
    var fila = 0;
    verifyType(fila); // indice === 0
  }

  function verifyType(fila) {
    const typeCase = newList[fila].type; // indice === 1

    switch (typeCase) {
      case 'image/jpeg':
        setUrl(newList[fila].uri);
        setType(1);
        teste();
        break;
      case 'video/mp4':
        setUrl(newList[fila].uri);
        SetFila1(fila);
        setType(2);
        break;
      default:
        break;
    }
  }

  function selectFile() {
    FilePickerManager.showFilePicker(null, (response) => {
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
        //setNewList((newList) => [...newList, response.uri]);
        setType(3);
      }
    });
  }

  const ViewVideo = (
    <Video
      source={{
        uri: url,
      }} // Can be a URL or a local file.
      style={styles.backgroundVideo}
      onEnd={() => {
        onEnd(fila1);
      }}
      fullscreen={true}
      fullscreenOrientation={'landscape'}
      resizeMode={'cover'}
    />
  );

  const ViewImage = (
    <>
      {!newList ? (
        <>
          <Image
            style={styles.logo}
            fadeDuration={800}
            source={{
              uri: url,
            }}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );

  const ViewWeb = (
    <WebView
      source={{
        uri: 'https://github.com/facebook/react-native',
      }}
      style={{marginTop: 20}}
    />
  );

  return (
    <>
      {type === 0 && ViewWeb}
      {type === 1 && ViewImage}
      {type === 2 && ViewVideo}
      {type === 3 && (
        <>
          <Text>{}</Text>
          <Button title="Teste" onPress={() => selectFile()} />
          <Button title="Play" onPress={() => start()} />
        </>
      )}
      {/*run === true ? (
        ViewVideo
>>>>>>> Stashed changes
      ) : (
        <>
          {ViewImage}
          <Text>{newList}</Text>
          <Button title="Teste" onPress={() => selectFile()} />
          <Button title="Play" onPress={() => start()} />
        </>
      )*/}
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
