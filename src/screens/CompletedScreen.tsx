import React, { useEffect } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import mainStyles from '../styles/main';
import { useWeNeed } from '../hooks/useWeNeed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

export const CompletedScreen = () => {

  const { cosas, getCosasCompleted, deleteCompleted } = useWeNeed();

  const onPresseDeleteCompleted = () =>{
    if(cosas.length > 0){
      Alert.alert('Borrar compras', '¿Estas seguro que desea borrar todos las compras marcadas como listas?', [
        {
          text: 'Si',
          onPress: async() =>{ await deleteCompleted() },
        },
        {text: 'No', 
        style: 'cancel',},
      ]);
    }
  }

  useEffect(() => {
    getCosasCompleted();
  }, [])

  return (
    <View style={{ marginTop : 20, flex:1}}>
        <View style={{...styles.inputContainer,  marginTop: 20, marginBottom: 10, alignItems: 'center'}}>
              <Text style={styles.listHeaderText}>
                Compras Listas
              </Text>
          <FlatList
            style={{
                marginHorizontal : 20
            }}
            data={cosas}
            renderItem={({item}) => (
                <Text style={styles.textName}>{ item.name }</Text> 
              ) }
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.buttonContainer}>
        </View>
        {
          (cosas.length > 0) && 
          <TouchableOpacity onPress={() => onPresseDeleteCompleted()} style={styles.buttonDelete} activeOpacity={0.7}>
            <Text style={styles.textButton}>BORRAR</Text>
          </TouchableOpacity>
        }
        
    
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
    marginBottom: 20
  },
  textName : {
    fontSize: 20,
    color: colors.textCompleted,
    fontWeight: 'bold'
  },
  buttonContainer : {
    flex: 1,
  },
  buttonDelete : {
    height:100,
    backgroundColor: colors.textCompleted,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent : 'center',
    marginBottom: 20
  },
  textButton : {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})