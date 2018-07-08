import * as types from "../actions/constants";

const initialState = {
  memberList: [],
  memberDetails: null
};

const member = (state = initialState, action) => {
  switch (action.type) {
    case types.MEMBERLIST_REQUEST:
      return state;
    case types.MEMBERLIST_SUCCESS:
      return { ...state, memberList: action.payload.data };
    case types.MEMBERLIST_FAILURE:
      return state;
    case types.GET_MEMBERDETAILS:
      return { ...state, memberDetails: action.payload };
    default:
      return state;
  }
};

export default member;
