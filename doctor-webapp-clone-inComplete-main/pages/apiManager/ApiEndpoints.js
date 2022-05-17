// Dev url -
// export const BASE_URL = "http://13.127.72.132:3001/api/v1.0";


// Prod url -
export const BASE_URL = "http://18.116.255.149:8001/healcounselling/api/v0";
http://18.116.255.149:8001/healcounselling/api/v0/user/signup


export const GOOGLEPLACESAPI ='AIzaSyDqgU7Rpbvuzx68RTYvDCWJzVVSzl48b2w'





export default function ApiEndpoint(type) {
    switch (type) {
        case LOGIN_API:
            return `${BASE_URL}${LOGIN_ENDPOINT}`;
        case SIGNUP_API:
            return `${BASE_URL}${SIGNUP_ENDPOINTS}`;
        case EMAIL_VERIFY_API:
            return `${BASE_URL}${EMAIL_VERIFY_ENDPOINTS}`;
        case FORGOT_PASSWORD_API:
            return `${BASE_URL}${FORGOT_PASSWORD_ENDPOINTS}`;
        case RESET_PASSWORD_API:
            return `${BASE_URL}${RESET_PASSWORD_ENDPOINTS}`;
        case INVALID_USER_API:
            return `${BASE_URL}${INVALID_USER_ENDPOINTS}`;
        case ALL_API:
            return `${BASE_URL}${ALL_ENDPOINTS}`;
        case RESEND_OTP_API:
            return `${BASE_URL}${RESEND_OTP_ENDPOINTS}`;
        case CHANGE_PASSSWORD_API:
            return `${BASE_URL}${CHANGE_PASSSWORD_ENDPOINTS}`;
        case VERIFY_OTP_FORGOT_PASS_API:
            return `${BASE_URL}${VERIFY_OTP_FORGOT_PASS_ENDPOINTS}`;
        case VERIFY_OTP_FORGOT_PASS_API:
            return `${BASE_URL}${VERIFY_OTP_FORGOT_PASS_ENDPOINTS}`;
        default:
            return "";
    }
}

export const LOGIN_API = "LOGIN_API";
export const SIGNUP_API = "SIGNUP_API"
export const EMAIL_VERIFY_API = "EMAIL_VERIFY_API"
export const FORGOT_PASSWORD_API = "FORGOT_PASSWORD_API"
export const RESET_PASSWORD_API = "RESET_PASSWORD_API"
export const INVALID_USER_API = "INVALID_USER_API"
export const ALL_API = "ALL_API"
export const RESEND_OTP_API = "RESEND_OTP_API"
export const CHANGE_PASSSWORD_API = "RESEND_OTP_API"
export const VERIFY_OTP_FORGOT_PASS_API = "VERIFY_OTP_FORGOT_PASS_API"
