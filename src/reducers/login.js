import * as types from '../actions/constants';

const initialState = {
    loggedIn: false,
    user: {}
}

const login = (state=initialState, action) => {
    switch(action.type) {
        case types.LOGIN_REQUEST:
            return state;
        case types.LOGIN_SUCCESS:
            return { ...state, loggedIn: true, user: action.payload.data[0] };
        case types.LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
}

export default login