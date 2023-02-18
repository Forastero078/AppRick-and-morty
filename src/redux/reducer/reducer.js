import { ADD_CARD, DELETE_CARD, FILTER, ORDER} from '../actions/types'
import { store } from '../store/store';


const initialState= {
        myFavorites: [],
        allCharacters: []
    };


export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CARD:
            let addFav = [...state.allCharacters]
            return {...state,
              myFavorites: [...addFav, 
                action.payload
            ],
            allCharacters: [...addFav, 
                action.payload
            ]
        };

        case DELETE_CARD:
            let filter = state.myFavorites.filter((e) => e.id !== action.payload)
            return {
              myFavorites: filter
            }

        case FILTER:
            let allCharactersFilter = [...state.allCharacters].filter((e) => e.gender === action.payload)
                return {...state,
                myFavorites: allCharactersFilter
            };

        case ORDER:
            let allCharacters = [...state.allCharacters]

            if(action.payload === 'Ascendente'){
                let ascendente = allCharacters.sort((a,b) => a.id < b.id ? -1 : 1);
                return {...state,
                    myFavorites: ascendente
                }
            } else if( action.payload === 'Descendente'){
                let descendente = allCharacters.sort((a,b) => a.id > b.id ? -1 : 1);
                return {
                    ...state,
                    myFavorites: descendente
                }
            }
            break;

            default:
                return state;
    }
}