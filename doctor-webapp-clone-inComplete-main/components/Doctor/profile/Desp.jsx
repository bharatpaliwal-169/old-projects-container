import React from 'react'
import {summary} from './data';
export default function Desp() {
  return (
    <React.Fragment>
      {summary.map((point) => {
        return (
          <React.Fragment>

            <div className='card card-dis'>
              <h2 className="mt-3 card-title">About The Expert</h2>
              <p className="ms-4 card-body">
                {point.about}
              </p>
            </div>
              
            <div className='card card-dis'>
              <h2 className="mt-3 card-title">Specalizations</h2>
              <ul className="list card-body">
                {point.specializations.map(id =>{
                  return <li>{id}</li>
                } )}
              </ul>
            </div>
            
              
            <div className='card card-dis'>
              <h2 className="mt-3 card-title"> Awards </h2>
              <p className="ms-4 card-body">
                {point.awards}
              </p>
            </div>
            
            <div className='card card-dis'>
              <h2 className="mt-3 card-title">Education</h2>
              <ul className="list card-body">
                {point.education.map(id => {
                  return <li>{id}</li>
                })}
              </ul>
              
            </div>
            <div className='card card-dis'>
              <h2 className="mt-3 card-title">Tranings and Certifications</h2>
              <p className="ms-4 card-body">{point.traning}</p>              
            </div>

            <div className='card card-dis'>
              <h2 className="mt-3 card-title">Experience</h2>
              <ul className="list card-body">
                {point.experience.map(id => {
                  return <li>{id}</li>
                })}
              </ul>
            </div>

            <div className='card card-dis'>
              <div className='row'>
                <div className='col-3 offset-1 card card-dis'>Digital Precription</div>
                <div className='col-3 ms-4 card card-dis'>Share your reports on chat</div>
                <div className='col-3 ms-4 card card-dis'>Follow up in 6 Days</div>
              </div>
            </div>

          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
