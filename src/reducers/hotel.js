import * as types from '../actions/constants';

const initialState = {
    hotelList: [],
}

const hotel = (state=initialState, action) => {
    switch(action.type) {
        case types.HOTEL_REQUEST:
            return state;
        case types.HOTEL_SUCCESS:
            return { ...state, hotelList: action.payload.data };
        case types.HOTEL_FAILURE:
            return state;
        default:
            return state;
    }
}

export default hotel;