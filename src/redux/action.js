import {
    SET_ZIPCODE_INFO,
    SET_IS_LOADING,
    SET_HAS_ERROR
} from './const';

export function setZipCodeInfo(info) {
    return {
        payload: {
            information: info
        },
        type: SET_ZIPCODE_INFO
    }
}

export function setLoading(bool) {
    return {
        payload: {
            isLoading: bool
        },
        type: SET_IS_LOADING
    }
}

export function setError(bool, msg) {
    return {
        payload: {
            hasError: bool,
            errorMsg: msg,
        },
        type: SET_HAS_ERROR
    }
}