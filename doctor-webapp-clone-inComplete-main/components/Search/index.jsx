import React from 'react'
import {FormControl,Button} from 'react-bootstrap'
export default function Search() {  
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row mt-2 mb-2'>
          <div className='col-5 col-sm-3 offset-sm-3'>
            <FormControl list='cities' type='text' placeholder='Search City' />
            <datalist id='cities'>
              <option value="Delhi"/>
              <option value="Mumbai"/>
              <option value="Pune"/>
              <option value="Jaipur"/>
              <option value="Dholakpur"/>
            </datalist>
          </div>
          
          <div className='col-5 col-sm-3 '>
            <FormControl list='doctors' type='text' placeholder='Search Doctor' />
            <datalist id='doctors'>
              <option value="Heart Specialist"/>
              <option value="general Physician"/>
              <option value="Neurologist"/>
              <option value="Dentist"/>
              <option value="Orthopadist"/>
            </datalist>
          </div>
          <div className="col-2">
            <Button type='submit' variant='outline-primary'>
              <i className='fa fa-search me-sm-2'></i>
              Search
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}