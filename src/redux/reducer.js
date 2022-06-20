import { InitialState } from "./initialState";
import {
    SET_ZIPCODE_INFO,
    SET_HAS_ERROR,
    SET_IS_LOADING
} from "./const";

const reducer = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ZIPCODE_INFO:
            return {
                ...state,
                information: payload.information
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading
            }
        case SET_HAS_ERROR:
            return {
                ...state,
                hasError: payload.hasError,
                errorMsg: payload.errorMsg
            }
        default:
            return state;
    }
}

export default reducer;