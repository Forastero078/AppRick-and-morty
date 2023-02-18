import { ADD_CARD, DELETE_CARD, FILTER, ORDER} from '../actions/types'


export function addCard(character){
    return{
        type: ADD_CARD,
        payload: character
    }
}

export function deleteCard(id){
    return {
        type: DELETE_CARD,
        payload: id
    }
}

export function filterCards(status){
    return{
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}