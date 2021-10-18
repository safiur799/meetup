import LOGIN_SUCCESS from "./actionTypes"

export const loginSuccess = (payload) => {
    return
    {
        type: LOGIN_SUCCESS,
         payload
    }
}

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}