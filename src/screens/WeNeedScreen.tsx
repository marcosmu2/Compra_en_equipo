import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform,  SectionList,  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import mainStyles from '../styles/main'
import { useWeNeed } from '../hooks/useWeNeed';
import { AddCosa } from '../components/AddCosa';
import colors from '../styles/colors';
import { ItemCosa } from '../components/ItemCosa';

export const WeNeedScreen = () => {

  const { getCosas, changeText,cosas,createCosa,tipoSelected,settipoSelected, sectionCosas } = useWeNeed();

  useEffect(() => {
    getCosas();
  }, [])  

  return (
    <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <SectionList
            sections={sectionCosas}
            renderItem={({item}) => (
              <TouchableOpacity disabled={true} activeOpacity={0.7} onPress={() => clickEvent(item) }>
                <ItemCosa cosa={item} showOnlyName={false} /> 
              </TouchableOpacity>
               ) }
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={(section : {title}) => (
              <View>
                <AddCosa 
                  createCosa={createCosa} 
                  changeText={changeText} 
                  tipoSelected={tipoSelected} 
                  settipoSelected={settipoSelected} />
                <View style={{...styles.inputContainer,  marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
                        <Text style={styles.listHeaderText}>
                          Lista de compras
                        </Text>
                </View>
              </View>
            )}
          ></SectionList>
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