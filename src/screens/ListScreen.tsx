import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigator/navigator'
import { useWeNeed } from '../hooks/useWeNeed'
import mainStyles from '../styles/main'
import { FlatListCosas } from '../components/FlatListCosas'
import { Cosas } from '../shared/types'
import colors from '../styles/colors'

interface Props extends StackScreenProps<RootStackParams,'ListScreen'>{

}

export const ListScreen = ({route, navigation} : Props) => {

  const tipo = route.params

  const { updateIsCompleted, getCosasByTipo, cosas } = useWeNeed();

  const clickEvent = (cosa : Cosas) => {
    updateIsCompleted(cosa.id, !cosa.isCompleted).then(() => { getCosasByTipo(tipo.value)});
  }

  useEffect(() => {
    getCosasByTipo(tipo.value);
  }, [])

  return (
    <View style={{ marginTop : 20}}>
        <View style={{...styles.inputContainer,  marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
              <Text style={styles.listHeaderText}>
                Lista de compras {tipo.name}
              </Text>
        </View>
        <FlatListCosas cosas={cosas} showOnly={false} showOnlyName={true} getEvent={() => getCosasByTipo(tipo.value)} />
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