import react, { useState } from "react";
import { Cosas, SectionCosas, Tipos } from "../shared/types";
import firebase from '../database/firebase';


export const useWeNeed = () => {
  
  const [tipoSelected, settipoSelected] = useState(Tipos[0].value);
  const [needed, setNeeded] = useState('');
  const [cosas, setCosas] = useState<Cosas[]>([]);
  const [sectionCosas, setSectionCosas] = useState<SectionCosas[]>([]);

  const createCosa = async() =>  {
    await firebase.db.collection('Cosas').add({
      Name : needed,
      Tipo : tipoSelected,
      IsCompleted : false
    });
    getCosas();
  }

  const updateIsCompleted = async(id : string, isCompleted : boolean) => {
    await firebase.db.collection('Cosas').doc(id).update({
      IsCompleted : isCompleted
    });
  }

  const changeText = (text : string) => {
    setNeeded(text);
  }

  const getCosas = () => {
    firebase.db.collection('Cosas').onSnapshot(queyS => {
                                                    const data : Cosas[] = []
                                                    queyS.docs.forEach(doc =>{
                                                                  const docData = doc.data();
                                                                  data.push({id:doc.id, name : docData.Name, tipo: docData.Tipo, isCompleted: docData.IsCompleted});
                                                                });
                                                    setCosas(data);
                                                    const sectionData : SectionCosas[] = [{ data : data, title : "HOla Mundo 2" }]
                                                    setSectionCosas(sectionData);
                                              })
  }

  const getCosasByTipo = (tipo : string) => {
    firebase.db.collection('Cosas').where('Tipo', '==', tipo).onSnapshot(queyS => {
                                                    const data : Cosas[] = []
                                                    queyS.docs.forEach(doc =>{
                                                                  const docData = doc.data();
                                                                  data.push({id:doc.id, name : docData.Name, tipo: docData.Tipo,isCompleted: docData.IsCompleted});
                                                                });
                                                    setCosas(data);
                                                    const sectionData : SectionCosas[] = [{ data : data, title : "HOla Mundo 2" }]
                                                    setSectionCosas(sectionData);
                                              })
  }

  const getCosasCompleted = () => {
    firebase.db.collection('Cosas').where('IsCompleted', '==', true).onSnapshot(queyS => {
                                                    const data : Cosas[] = []
                                                    queyS.docs.forEach(doc =>{
                                                                  const docData = doc.data();
                                                                  data.push({id:doc.id, name : docData.Name, tipo: docData.Tipo,isCompleted: docData.IsCompleted});
                                                                });
                                                    setCosas(data);
                                                    const sectionData : SectionCosas[] = [{ data : data, title : "HOla Mundo 2" }]
                                                    setSectionCosas(sectionData);
                                              })
  }

  const deleteCompleted = async() => {
    try{
      const collectionRef = firebase.db.collection('Cosas').where('IsCompleted', '==', true);
      const querySnapshot = await collectionRef.get();

      // Eliminar cada documento de la colección
      const deletePromises = querySnapshot.docs.map((doc) => doc.ref.delete());
      await Promise.all(deletePromises);

      console.log('Colección eliminada exitosamente');
  } catch (error) {
    console.error('Error al eliminar la colección:', error);
  }
  }

    return {
      createCosa,
      changeText,
      deleteCompleted,
      getCosas,
      getCosasByTipo,
      getCosasCompleted,
      updateIsCompleted,
      tipoSelected,
      settipoSelected,
      cosas,
      sectionCosas
  }
}
