import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Video from 'react-native-video';
const App = () => {
  const url = 'https://www.w3schools.com/html/mov_bbb.mp4';
  const type = 0;
  return (
    <>
      {type === 0 ? (
        <Video
          source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} // Can be a URL or a local file.
          style={styles.backgroundVideo}
          fullscreen={true}
          fullscreenOrientation={'landscape'}
          repeat={true}
          resizeMode={'cover'}
        />
      ) : (
        <Text>Imagem</Text>
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
