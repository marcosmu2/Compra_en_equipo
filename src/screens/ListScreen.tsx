import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigator/navigator'
import { useWeNeed } from '../hooks/useWeNeed'
import mainStyles from '../styles/main'
import { FlatListCosas } from '../components/FlatListCosas'
import { Cosas } from '../shared/types'
import colors from '../styles/colors'
import { ItemCosa } from '../components/ItemCosa'

interface Props extends StackScreenProps<RootStackParams,'ListScreen'>{

}

export const ListScreen = ({route, navigation} : Props) => {

  const tipo = route.params

  const { updateIsCompleted, getCosasByTipo, sectionCosas } = useWeNeed();

  const clickEvent = (cosa : Cosas) => {
    updateIsCompleted(cosa.id, !cosa.isCompleted).then(() => { getCosasByTipo(tipo.value)});
  }

  useEffect(() => {
    getCosasByTipo(tipo.value);
  }, [])

  return (
    <View style={{ marginTop : 20}}>
      <SectionList
            sections={sectionCosas}
            renderItem={({item}) => (
              <TouchableOpacity disabled={false} activeOpacity={0.7} onPress={() => clickEvent(item) }>
                <ItemCosa cosa={item} showOnlyName={true} /> 
              </TouchableOpacity>
               ) }
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={(section : {title}) => (
              <View style={{...styles.inputContainer,  marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
                      <Text style={styles.listHeaderText}>
                        Lista de compras {tipo.name}
                      </Text>
              </View>
            )}
          ></SectionList>
        {/* <View style={{...styles.inputContainer,  marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
              <Text style={styles.listHeaderText}>
                Lista de compras {tipo.name}
              </Text>
        </View>
        <FlatListCosas cosas={cosas} showOnly={false} showOnlyName={true} getEvent={() => getCosasByTipo(tipo.value)} /> */}
    </View>
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