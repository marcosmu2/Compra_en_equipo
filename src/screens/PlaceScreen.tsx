import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HomeButton } from '../components/HomeButton'
import { ScrollView } from 'react-native-gesture-handler'

export const PlaceScreen = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <HomeButton navigationPage='ListScreen' buttonText='Super' iconName='basket-outline' />
            <HomeButton navigationPage='ListScreen' buttonText='Verduleria' iconName='leaf-outline' />
            <HomeButton navigationPage='ListScreen' buttonText='Carniceria' iconName='restaurant-outline' />
            <HomeButton navigationPage='ListScreen' buttonText='Panaderia' iconName='cloud-outline' />
            <HomeButton navigationPage='ListScreen' buttonText='Farmacia' iconName='medkit-outline' />
            <HomeButton navigationPage='ListScreen' buttonText='Otros' iconName='pricetag-outline' />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container : {
         flex : 1,
         justifyContent : 'center',
         marginHorizontal : 20
    }
})