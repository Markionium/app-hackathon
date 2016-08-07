function applyFunctionToPayloadValues(func, payload) {
    return Object
        .keys(payload)
        .reduce((acc, key) => {
            if (Array.isArray(payload[key])) {
                acc[key] = payload[key].map(func);
            } else {
                acc[key] = func(payload[key]);
            }
            return acc;
        }, {});
}

export function encode(payload) {
    return applyFunctionToPayloadValues(encodeURIComponent, payload);
}

export function decode(payload) {
    return applyFunctionToPayloadValues(decodeURIComponent, payload);
}