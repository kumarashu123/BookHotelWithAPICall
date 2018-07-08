import * as types from './constants';

export const getMemberList = () => ({
    type    : types.MEMBERLIST_REQUEST    
});

export const getMemberDetails = (data) => ({
    type    : types.GET_MEMBERDETAILS,
    payload : data
});