
const signupValidation = (values) => {
    let errors={}


    if (!values.fullname){
        errors.fullname="full name required"
    }

    if (!values.email){
        errors.email="email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

    if(!values.number){
        errors.number='number required'
    }else if (values.number.length<10){
        errors.number='enter valid number'
    }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }

      if (!values.password1) {
        errors.password1 = 'Password is required';
      } else if (values.password1 !== values.password) {
        errors.password1 = 'Passwords do not match';
      }




      return errors;

}

export default signupValidation
