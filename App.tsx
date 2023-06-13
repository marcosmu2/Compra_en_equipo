import 'react-native-gesture-handler';
import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Navigator } from './src/navigator/navigator';

const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <ImageBackground
        source={require('./src/images/compraenequipobg.jpeg')}
        style={styles.backgroundImage}
      >
        <Navigator />
      </ImageBackground>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
  });

export default App;