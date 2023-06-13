import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { HomeButton } from '../components/HomeButton'

export const HomeScreen = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  

  return (
    <View style={ styles.container }>
        <HomeButton navigationPage='WeNeedScreen' buttonText='Necesitamos' iconName='receipt-outline' isHome={true} />
        <HomeButton navigationPage='PlaceScreen' buttonText='Estoy' iconName='cart-outline' isHome={true} />
        <HomeButton navigationPage='CompletedScreen' buttonText='Comprado' iconName='trash-outline' isHome={true} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
         flex : 1,
         justifyContent : 'center',
         marginHorizontal : 20
    }
})