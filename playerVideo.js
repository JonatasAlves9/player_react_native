import React, {useState} from 'react';
import {StyleSheet, Text, Button, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import Video from 'react-native-video';
import FilePickerManager from 'react-native-file-picker';

const Player = () => {
  const [type, setType] = useState(2);
  const [url, setUrl] = useState();
  const [newList, setNewList] = useState([]);

  const [fila1, SetFila1] = useState([]);
  function onEnd(fila) {
    fila === fila++;

    const size = newList.length;
    if (fila === size) {
      start(0);
    } else {
      setUrl(newList[fila].uri);
      SetFila1(fila);
    }
  }

  function start(fila) {
    SetFila1(0);
    setUrl(newList[fila].uri);
    setType(0); // indice === 0
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
        setType(1);
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

  return (
    <>
      {type === 0 && ViewVideo}
      {type === 1 && ViewImage}
      {type === 2 && (
        <>
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

export default Player;
