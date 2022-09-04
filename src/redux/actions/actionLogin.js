import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../firebase-config"

import { typesLogin } from "../types/types"

 //--------------Login---------------------------//
 //---validar el ususario y contrasena-----------------------//
 export const actionLoginAsync = (email, pass) =>{
     return (dispatch) =>{
         console.log(email, pass)
        //
         const auth = getAuth()
         signInWithEmailAndPassword(auth, email, pass)
         .then(({user})=>{
             dispatch(actionLoginSync(email, pass))
             console.log(user.displayName, 'Bienvenido usuario encontrado')
         })
         .catch(error=>{
             console.warn(error, 'Usuario No autorizado')
         })

     }
 }

export const actionLoginSync = (email, pass)=>{
    return {
        type: typesLogin.login,
        payload: {email, pass}
    }
}
 //--------------Logout---------------------------//
export const actionLogoutAsyn = ()=>{
    return (dispatch)=>{
        const auth = getAuth();
        signOut(auth)
        .then(({user})=>{
            dispatch(actionLogoutSyn())
            console.log('Chao')
        })
        .catch((error)=>{console.warn(error, '')});
    }
}


export const actionLogoutSyn = ()=>{
    return {
        type: typesLogin.logout
    }
}

//-----------------Inicializar con Google-----------------------------//
export  const loginGoogle = ()=>{
    return (dispatch) => {
        console.log('dentro de google')
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then( ({user})=>{
            console.log(user, 'Usuario Autorizado, Bienvenido')
        })
        .catch(error =>{
            console.warn(error, 'Usuario NO Autorizado')
        })
    }
}
