import * as types from './constants';

export const validateUser = (username, password) => ({
        type    : types.LOGIN_REQUEST,
        payload : {username, password} 
})