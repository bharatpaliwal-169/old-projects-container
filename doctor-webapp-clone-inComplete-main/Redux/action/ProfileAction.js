import {SAVE_PROFILE_DATA} from '../Type'

export const saveProfile = data => {
    console.log(data, "saveProfile");
    return {
        type: SAVE_PROFILE_DATA,
        payload: data
    }
}