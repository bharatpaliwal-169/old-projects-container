import React from 'react'
import {Button,Image} from 'react-bootstrap';
import {data} from './data';
import Link from 'next/link'
export default function Card() {

  return (
    <React.Fragment>
      <div className='card card-x light-blue'>
        <div className='row'>
        {data.map((item) => {
          return (
            <React.Fragment>
            <section className='col-4 mt-4 mb-4'>
                <Image src={item.img} alt={item.name} fluid className='round-img' />
            </section>

            <div className="col-7 offset-1">  
              <div className='card-title ms-4 mt-3 mb-2'>
                <h3> {item.name} </h3>
              </div>
              
              <ul className='card-list ms-4'>
                <li>Qualification : {item.profile}</li>
                <li>Speaks : {item.language}</li>
                <li>Experience : {item.experience}</li>
                <li>Profession : {item.job}</li>
                <li>Fees : {item.fee}</li>
              </ul>

              <section className='ms-5 mt-4 mb-3'>
                <Link href='/doctor/profile/update'>
                  <a className='btn btn-md btn-primary'>
                    Update Profile
                  </a>   
                </Link>
              </section>
            </div>
            </React.Fragment>
          )
        })}
            
        </div>
      </div>
      
      <div className='row mt-2 mb-4'>
        <div className='col-5 offset-1'>
          <Button block variant="primary" size="lg" className='text-white'>
            Book Consultation
          </Button>
        </div>

        <div className='col-4'>
          <Button block variant="danger" size="lg" className='text-white'>
            Watch Intro
          </Button>
        </div>
        
      </div>
      
    </React.Fragment>
  )
}