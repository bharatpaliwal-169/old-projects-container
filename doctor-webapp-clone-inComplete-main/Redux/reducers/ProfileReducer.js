import {
    SAVE_PROFILE_DATA,
} from '../Type'
const initialState = {
profileData:{},
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PROFILE_DATA:
            return {
                ...state,
                profileData: action.payload
            }
           break
            default:
            return state
    }
}


export default ProfileReducer