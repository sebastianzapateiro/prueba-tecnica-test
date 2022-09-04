import { typesPokemons } from "../types/types"


const initialState = {
    agendaCitas: []
}

export const pokemonsReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesPokemons.add:
            return {
                agendaCitas: [...state.agendaCitas, action.payload]
            }
        case typesPokemons.delete:
            return {
                agendaCitas: state.agendaCitas.filter(c => c.email !== action.payload)
            }
        case typesPokemons.list:
            return {
                agendaCitas: [...action.payload]
            }
        case typesPokemons.edit:
                return {
                  ...state
            }
        default:
            return state
    }

}