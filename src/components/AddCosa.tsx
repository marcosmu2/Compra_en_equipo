import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import mainStyles from '../styles/main'
import colors from '../styles/colors'
import { Tipos } from '../shared/types'

interface Props {
    createCosa : () => void;
    changeText : (text : string) => void;
    tipoSelected : string;
    settipoSelected : (value : string) => void;
}


export const AddCosa = ({changeText, createCosa, settipoSelected, tipoSelected}:Props) => {
  return (
    <View style={styles.inputContainer}>
              <TextInput 
                  style={ styles.inputStyle }
                  placeholder="Que nesecitamos?"
                  autoCapitalize="words"
                  placeholderTextColor='rgba(0, 128, 128, 0.3)'
                  onChangeText={(value) => changeText(value)}
              />
              <Picker
                style={{marginVertical:10}}
                dropdownIconColor={colors.primaryDark}
                dropdownIconRippleColor={colors.secondary}
                selectedValue={tipoSelected}
                onValueChange={(itemValue, itemIndex) =>
                  settipoSelected(itemValue)
                }>
                  {
                    Tipos.map(tipo => 
                    <Picker.Item key={tipo.value} style={styles.inputSelect} color={colors.primaryDark} label={tipo.name} value={tipo.value} /> 
                    )
                  }
              </Picker>
              <TouchableOpacity style={styles.addButton} onPress={createCosa}>
                <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>
          </View>
  )
}
const styles = StyleSheet.create({
    inputContainer:{
      ...mainStyles.homeContainer,
      marginHorizontal : 20,
      marginBottom : 10
    },
    inputStyle: {
        borderColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: 10,
        borderRadius: 10,
        borderBottomColor : colors.primaryDark,
        borderBottomWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primaryDark,
    },
    inputSelect : {
        fontSize:20,
        fontWeight : 'bold',
    },
    addButton : {
        backgroundColor: colors.primaryDark,
        height: 60,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
})