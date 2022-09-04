import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesRegister } from "../types/types"



export const actionRegisterAsync = (nombre, email, pass, telefono) =>{
    return (dispatch) => {
       // console.log(nombre, email, pass, telefono, direccion)
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, pass)
        .then(async({user}) => {
           
            await updateProfile(auth.currentUser, {displayName: nombre}, {phoneNumber: telefono })
            dispatch(actionRegisterSync(nombre, email, pass, telefono))
            console.log(user, 'Usuario Agregado')
        })
        .catch(err => {
            console.warn(err, 'Usuario No autorizado')
        })
     

    }
}

export const actionRegisterSync = (nombre, email, pass, telefono)=>{
    return{
        type: typesRegister.register,
        payload: {
              nombre, email, pass, telefono

    }
}
}
