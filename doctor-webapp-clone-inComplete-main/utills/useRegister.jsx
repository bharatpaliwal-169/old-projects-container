import {useState} from 'react'

const useRegister = (validate) => {
  const [values, setValues] = useState({
    
    fullname: '',
    email: '',
    number: '',
    password: '',
    password1: ''
  })
   
   const [errors, seterrors] = useState({})
   



   const handleChange=e=> { 
       const{name , value}=e.target;
       setValues({
           ...values, 
           [name]:value
       })
   }
   
   const handleSubmit=e=>{
       e.preventDefault();
 
      seterrors(validate(values))     

   }
   
   return{handleChange , values , handleSubmit , errors}
}

export default useRegister
