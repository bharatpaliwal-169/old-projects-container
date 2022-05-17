import { combineReducers } from 'redux';
import ProfileReducer from './reducers/ProfileReducer'

const appReducer = combineReducers({
    ProfileReducer: ProfileReducer,
});

let rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;