import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import mainStyles from '../styles/main';
import { Cosas } from '../shared/types';
import colors from '../styles/colors';

interface Props{
    cosa : Cosas;
    showOnlyName? : boolean;
}

export const ItemCosa = ({cosa, showOnlyName = false} : Props) => {
  return (
    <View style={{
        ...mainStyles.homeContainer,
        paddingHorizontal : 20,
        paddingVertical : 5,
        marginBottom: 10
    }}>
        <Text style={{...styles.textName, 
                        textDecorationLine: cosa.isCompleted ? 'line-through': 'none',
                        color: cosa.isCompleted ? colors.textCompleted : styles.textName.color }}>
            {cosa ? cosa.name : ''}
        </Text>
        {
            !showOnlyName && <Text style={{...styles.textTipo, 
                                            textDecorationLine: cosa.isCompleted ? 'line-through': 'none',
                                            color: cosa.isCompleted ? colors.textCompleted : styles.textName.color
                                            }}>
            {cosa ? cosa.tipo : ''}
        </Text> 
        }
        
    </View>
    )
}

const styles = StyleSheet.create({
    textName : {
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold'
    },
    textTipo : {
        fontSize: 20,
        color: colors.primary
    }
})