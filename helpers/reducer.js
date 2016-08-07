import { LOADED_INITIAL_DATA, UPDATED_EMOJIS, UPDATED_ITEMS } from './constants.js';

export default function (state = {}, action) {
    switch(action.type) {
        case LOADED_INITIAL_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case UPDATED_EMOJIS:
            return {
                ...state,
                emojis: action.payload,
            }
        case UPDATED_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
    }

    return state;
}