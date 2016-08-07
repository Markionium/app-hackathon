import { encode, decode } from '../helpers/encodeDecode.js';

const getApiFromD2 = () => d2.getInstance().then(d2 => d2.Api.getApi());
const getApi = _.memoize(getApiFromD2, () => 'getApi');

export function initDataStoreForApp(key = 'emojis', namespace = 'emojiApp') {
    return getValueFromStore()
        .catch(() => getApi()
            .then(api => {
                console.log('Start!');
                return api.post(`dataStore/${namespace}/${key}`, {});
            }));
}

export function getValueFromStore(key = 'emojis', namespace = 'emojiApp') {
    return getApi()
        .then(api => api.get(`dataStore/${namespace}/${key}`))
        .then(value => decode(value));
}

export function saveValueToStore(value, key = 'emojis', namespace = 'emojiApp') {
    return getApi()
        .then(api => api.update(`dataStore/${namespace}/${key}`, encode(value)));
}