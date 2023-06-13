import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../styles/colors'
import { useNavigation } from '@react-navigation/native'
import mainStyles from '../styles/main'
import { Tipos } from '../shared/types'

interface Props {
    navigationPage? : string;
    buttonText : string;
    iconName : string;
    isHome? : boolean;
}

export const HomeButton = ({navigationPage, buttonText, iconName, isHome = false} : Props) => {

  const navigation = useNavigation();

  const navigate = () => {
    const tipo = Tipos.find(tipo => tipo.name.includes(buttonText));

    if(isHome){
      navigationPage ? navigation.navigate(navigationPage as never) : null;
    }

    navigationPage ? navigation.navigate(navigationPage as never , tipo as never) : null;
  }

  return (
    <TouchableOpacity style={isHome ? styles.homeContainer : styles.pageContainer } 
                          activeOpacity={0.5}
                          onPress={() => navigate()} >
            <Icon name={iconName}
                  color={colors.primary}
                  size={50}
                   />
            <Text style={isHome ? styles.homeText : styles.pageText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    homeContainer : {
        ...mainStyles.homeContainer,
        height : 150,
        marginVertical : 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageContainer : {
      ...mainStyles.homeContainer,
      height : 70,
      marginVertical : 30,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection : 'row'
  },
    homeText : {
        color: colors.primary,
        fontSize : 22,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    pageText : {
      color: colors.primary,
      fontSize : 22,
      fontWeight : 'bold',
      textAlign : 'center',
      marginLeft : 30
  }
})