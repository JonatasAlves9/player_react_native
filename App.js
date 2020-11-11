import React, {useState} from 'react';
import {StyleSheet, Text, Button, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import Video from 'react-native-video';
import FilePickerManager from 'react-native-file-picker';

const App = () => {
  const [type, setType] = useState(3);
  const [url, setUrl] = useState('');
  const [newList, setNewList] = useState([
    {
      uri: 'https://www.google.com.br/',
      type: 'web',
    },
  ]);

  const [fila1, SetFila1] = useState([]);

  function onEnd(fila) {
    fila === fila++;
    const size = newList.length;
    if (fila === size) {
      start(0);
    } else {
      verifyType(fila);
    }
  }

  function start(fila) {
    verifyType(fila); // indice === 0
  }

  function verifyType(fila) {
    const typeCase = newList[fila].type; // indice === 1

    switch (typeCase) {
      case 'web':
        setUrl(newList[fila].uri);
        setType(0);
        setTimeout(() => onEnd(fila), 3000);
        break;
      case 'image/hric':
        setUrl(newList[fila].uri);
        setType(1);
        setTimeout(() => onEnd(fila), 5000);
        break;
      case 'image/png':
        setUrl(newList[fila].uri);
        setType(1);
        setTimeout(() => onEnd(fila), 5000);
        break;
      case 'image/jpeg':
        setUrl(newList[fila].uri);
        setType(1);
        setTimeout(() => onEnd(fila), 5000);
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
    <Image
      style={styles.logo}
      source={{
        uri: url,
      }}
    />
  );

  const ViewWeb = (
    <WebView
      source={{
        uri: url,
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
          <Button title="Play" onPress={() => start(0)} />
        </>
      )}
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
