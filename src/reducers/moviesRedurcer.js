import { types } from '../types/types'

const initialState = {
    card: [],
    search: [],
    active: {
        title: '',
        year: '',
        image: '',
        description: '',
        score: ''
    }
}
export const moviesRedurcer = (state = initialState, action) => {
    switch (action.type) {

        case types.cardAddNew:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }

        case types.cardLoad:
            return {
                ...state,
                card: [...action.payload]
            }

        case types.cardActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.cardUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                card: state.card.map(
                    card => card.id === action.payload.id
                        ? action.payload.card
                        : card
                )
            }

        case types.cardLogoutClean:
            return {
                ...state,
                active: {
                    title: '',
                    year: '',
                    image: '',
                    description: '',
                    score: ''
                }
            }

            case types.ListarBusqueda:
                return{
                    ...state,
                    search: [...action.payload]
                }
        default:
            return state;
    }
}