import { typesRegister } from "../types/types"

export const registerReducers = (state = {}, action) => {
    switch (action.type) {
        case typesRegister.register:
            return{
                nombre: action.payload.nombre,
                email: action.payload.email, 
                pass: action.payload.pass, 
                telefono: action.payload.telefono,
               
            }
            
        default:
            return state
    }

}