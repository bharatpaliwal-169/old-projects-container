
import {useState} from 'react'

const useLogin = (validate) => {
    const [values, setValues] = useState({
    
        email: '',
        password: ''
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

export default useLogin
