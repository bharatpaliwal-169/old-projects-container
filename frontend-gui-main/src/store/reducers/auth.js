import * as actionTypes from '../actions/actionsType';
import { updateObject } from '../utility';
//this is the initial state that will be rendered on page load..
const initialState = {
    token: null,
    error: null, 
    loading: false
}


//we can use more actions, here,action is comming from actionType 
const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}


//REDUCER - main function is to pass only the useful info that is needed by the state
//remember by name reducer its work is to reduce or to filter the data that is passed and capture the useful data only.
const reducer = (state=initialState, action) => {
    
  //out of all the state data on data pass would be the one related too the type like ... authStart , start.
      switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
}


//NOTE: here we had our function one at a time like when we are starting we are just starting ,there can be cases where 
//we can have multiple functionalities at a same point of time.

export default reducer;