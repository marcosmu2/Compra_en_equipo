import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform,  StyleSheet, Text, View } from 'react-native'
import mainStyles from '../styles/main'
import { FlatListCosas } from '../components/FlatListCosas';
import { useWeNeed } from '../hooks/useWeNeed';
import { AddCosa } from '../components/AddCosa';
import colors from '../styles/colors';

export const WeNeedScreen = () => {

  const { getCosas, changeText,cosas,createCosa,tipoSelected,settipoSelected } = useWeNeed();

  useEffect(() => {
    getCosas();
  }, [])
  

  return (
    <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <AddCosa createCosa={createCosa} changeText={changeText} tipoSelected={tipoSelected} settipoSelected={settipoSelected} />

          <View style={{...styles.inputContainer,  marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
                  <Text style={styles.listHeaderText}>
                    Lista de compras
                  </Text>
          </View>
          <FlatListCosas cosas={cosas} getEvent={() => getCosas()} />
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    ...mainStyles.homeContainer,
    marginHorizontal : 20,
    marginBottom : 10
  },
  listHeaderText : {
    fontSize : 30,
    fontWeight : 'bold',
    color: colors.primaryDark,
  }
})