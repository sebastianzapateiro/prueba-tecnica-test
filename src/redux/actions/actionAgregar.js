import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from "../../firebase-config"

import { typesPokemons } from "../types/types"

//----------------editar-----------------------------///
export const editCitaAsync = (nuevaCita) => {
    return async (dispatch) => {
        const collectionCitas = collection(db, "pokemon")
        const q = query(collectionCitas, where("id", "==", nuevaCita.id))
        const datosQ = await getDocs(q)
        let ids = ''

        datosQ.forEach(async (docu) => {
            ids = docu.id
        })

        console.log(ids)

        const docRef = doc(db, "pokemon", ids)

        await updateDoc(docRef, nuevaCita)
            .then(resp => {
                dispatch(editCitaSync(nuevaCita))
                dispatch(listAgendaAsync())

            })
            .catch(error => console.log(error))


    }
}

export const editCitaSync = (nuevaCita) => {
    return {
        type: typesPokemons.edit,
        payload: { nuevaCita }

    }
}

//-------------------Listar----------------------------//

export const listAgendaAsync = () => {
    return async (dispatch) => {

        const collectionListar = await getDocs(collection(db, "Citas"))
        console.log(collectionListar)
        const citasA = []
        collectionListar.forEach(listar => {
            citasA.push(
                {
                    ...listar.data()
                }
            )

        })
        dispatch(listAgendarSync(citasA))
    }
}

export const listAgendarSync = (agenda) => {
    return {
        type: typesPokemons.list,
        payload: agenda
    }
}


//--------------Agregar cita agendar-------------------------------//
export const actionAddAgendaAsync = (formValue) => {
    return (dispatch) => {
        //addDoc recibir dos pararmetro (donde lo voy a guardar, que voy a guardar)
        //collection recibe dos pararmetro (el nombre que viene de firebaseConfig (baseDato, nombre de la coleccion que cree en Firestore))  
        setDoc(doc(db, "pokemon", formValue.id_pokemon), formValue)
            .then(resp => {
                dispatch(actionAddAgendaSync(formValue))
                dispatch(listAgendaAsync())
            })
            .catch(error => {
                console.warn(error, 'Datos no guardados')
            })

    }
}


export const actionAddAgendaSync = (formValue) => {
    return {
        type: typesPokemons.add,
        payload: formValue
    }

}


//--------------Eliminar cita agendar-------------------------------//
export const deleteCitaAsync = (email) => {
    return async (dispatch) => {
        const collectionCitas = collection(db, "Citas")
        const q = query(collectionCitas, where("email", "==", email))

        const datosQ = await getDocs(q)
        console.log(datosQ)

        datosQ.forEach(docu => {
            deleteDoc(doc(db, "Citas", docu.id))
        })
        dispatch(actionDeleteEmailSync(email))


    }
}

export const actionDeleteEmailSync = (email) => {
    return {
        type: typesPokemons.delete,
        payload: email
    }
}