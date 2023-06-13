import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Cosas } from '../shared/types'
import { ItemCosa } from './ItemCosa';
import { useWeNeed } from '../hooks/useWeNeed';

interface Props {
    cosas : Cosas[];
    showOnlyName? : boolean;
    showOnly? : boolean;
    getEvent : () => void;
}

export const FlatListCosas = ({cosas, showOnly=true, showOnlyName = false, getEvent} : Props) => {
  const {updateIsCompleted} = useWeNeed();

  const clickEvent = (cosa : Cosas) => {
    !showOnly && updateIsCompleted(cosa.id, !cosa.isCompleted).then(() => { getEvent()});
  }

  return (
    <FlatList
    style={{
        marginHorizontal : 20
    }}
    data={cosas}
    renderItem={({item}) => (
      <TouchableOpacity disabled={showOnly} activeOpacity={0.7} onPress={() => clickEvent(item) }>
        <ItemCosa cosa={item} showOnlyName={showOnlyName} /> 
      </TouchableOpacity>
       ) }
    keyExtractor={item => item.name}
    />
  )
}
