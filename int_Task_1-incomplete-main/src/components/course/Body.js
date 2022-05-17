import React from 'react'
import Structure from './Structure';
import About from './About';
export default function Body(props) {

  return (
    <div className="container-fluid body-clr">
      <div className='row'>
        <About {...props}/>
        <div className='col-12 col-md-6 mt-5 mb-5'>
          <h1>Course Structure</h1>
          <h6 className='mt-4 mb-4'> Instructor : {props.authorName} </h6>
          <Structure />
        </div>
        
      </div>
    </div>
  );
}
