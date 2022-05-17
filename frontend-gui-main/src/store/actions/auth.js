import * as actionTypes from './actionsType';
import axios from 'axios';

//EVENT FUNCTIONS
export const authStart =() =>{
  return{
    type: actionTypes.AUTH_START
  }
}

export const authSuccess =(token) =>{
  return{
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}
export const authFail =(error) =>{
  return{
    type: actionTypes.AUTH_FAIL,
    error:error
  }
}

export const Logout =() =>{
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  return{
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) =>{
  return dispatch =>{
    setTimeout(() =>{
      dispatch(Logout());
    },expirationTime*1000);
  }

}



//LOGIN FUNCTIONS
export const authLogin =(username,password) =>{
  return dispatch => {
    dispatch(authStart);
    
    //post the user data
    axios.post('http://127.0.0.1:8000/rest-auth/login',{
      username: username,
      password: password
    })
    .then(response =>{
      //token
      const token = response.data.key;
      const expirationDate = new Date(new Date().getTime() + 3600*1000) ; //session set up and session time to keep a user logged in is 1hr.
    
      //storing this token and expDate
      localStorage.setItem('token',token);
      localStorage.setItem('expirationDate',expirationDate);
      //tell state that login is success.
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch(error => {
      //error if any occured then...
      dispatch(authFail(error));
    })
  }
}

//SIGNUP FUNCTION  (same as login function just the difference is the prapms passes user,pass1,2 and email);
export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
      dispatch(authStart());
      axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
          username: username,
          email: email,
          password1: password1,
          password2: password2
      })
      .then(res => {
          const token = res.data.key;
          const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
          //store token for new user.
          localStorage.setItem('token', token);
          localStorage.setItem('expirationDate', expirationDate);
          dispatch(authSuccess(token));
          dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
          dispatch(authFail(err))
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
      const token = localStorage.getItem('token');
      if (token === undefined) {
          dispatch(Logout());
      } else {
          const expirationDate = new Date(localStorage.getItem('expirationDate'));
          if ( expirationDate <= new Date() ) {
              dispatch(Logout());
          } else {
              dispatch(authSuccess(token));
              dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
          }
      }
  }
}