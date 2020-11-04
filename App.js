import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Video from 'react-native-video';
import FilePickerManager from 'react-native-file-picker';

const App = () => {
  const [type, setType] = useState(0);
  const [url, setUrl] = useState('https://www.w3schools.com/html/mov_bbb.mp4');
  const [newList, setNewList] = useState([]);
  const array = useState([]);

  function onEnd() {
    setType(1);
  }

  function selectFile() {
    FilePickerManager.showFilePicker(null, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled file picker');
      } else if (response.error) {
        console.log('FilePickerManager Error: ', response.error);
      } else {
        setNewList([response.uri].concat(newList));
        setNewList((newList) => [...newList, response.uri]);
        console.log('-----------' + newList);
      }
    });
  }

  return (
    <>
      {type === 0 ? (
        <Video
          source={{
            uri: url,
          }} // Can be a URL or a local file.
          style={styles.backgroundVideo}
          onEnd={() => onEnd()} // Callback when playback finishes
          fullscreen={true}
          fullscreenOrientation={'landscape'}
          resizeMode={'cover'}
        />
      ) : (
        <>
          <Text>{newList}</Text>
          <Button title="Teste" onPress={() => selectFile()} />
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
});

export default App;
