import store from '../helpers/store.js';
import { LOADED_INITIAL_DATA, UPDATED_EMOJIS, UPDATED_ITEMS } from '../helpers/constants.js';
import { saveValueToStore, getValueFromStore } from './dataStore.js';

// Actions
export function loadInitialData() {
    loadData(getOrganisationUnits)
        .then((data) => {
            store.dispatch({
                type: LOADED_INITIAL_DATA,
                payload: data,
            });
        });
}

export function loadOtherObjectType(objectType) {
    loadItemsOfType(objectType)
        .then(items => {
            store.dispatch({
                type: UPDATED_ITEMS,
                payload: items,
            })
        });
}

export function addEmojiForItem(itemId, emoji) {
    const state = store.getState();
    const emojis = state.emojis;

    emojis[itemId] = (emojis[itemId] || []).concat([emoji]);

    saveValueToStore(emojis, 'emojis')
        .then(() => {
            store.dispatch({
                type: UPDATED_EMOJIS,
                payload: state.emojis,
            });
        });
}

// Action helpers
function loadData(loader) {
    return Promise.all([
            loader(),
            getValueFromStore('emojis'),
        ])
        .then((responses) => {
            return {
                items: responses[0],
                emojis: responses[1],
            };
        });
}

function getOrganisationUnits() {
    return d2.getInstance()
        .then(d2 => d2.models.organisationUnits.list())
        .then(organisationUnits => organisationUnits.toArray());
}

function loadItemsOfType(modelType) {
    return d2.getInstance()
        .then(d2 => d2.models[modelType].list())
        .then(list => list.toArray());
}