export const getApiFromD2 = () => d2.getInstance().then(d2 => d2.Api.getApi());
export const getApi = _.memoize(getApiFromD2, () => 'getApi');
export const getManifest = _.memoize(function () {
    return fetch('manifest.webapp', { credentials: 'same-origin' })
        .then(response => response.json());
}, () => 'getManifest');