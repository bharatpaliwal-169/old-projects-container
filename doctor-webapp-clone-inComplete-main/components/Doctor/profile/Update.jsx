import React,{useState} from 'react'
import {Form , FormControl, Button} from 'react-bootstrap';
import {data} from './data';
import Link from 'next/link';

export default function Update(props) {
  const [person,setPerson] = useState({
    name : data.map(item => item.name),
    profile : data.map(item => item.profile),
    job : data.map(item => item.job),
    fee : data.map(item => item.fee),
    language : data.map(item => item.language),
    experience : data.map(item => item.experience),
  });
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name] : [value]
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const userData = {
      name : person.name,
      profile : person.profile,
      job : person.job,
      fee : person.fee,
      experience : person.experience,
      language : person.language
    }
    console.log(userData);
    window.alert("updates made for user" +" "+ userData.name);  
  }

  return (
    <React.Fragment>
      <div className='container'>
        <div className='row mt-4 mb-4'>
          <div className=' col-12 col-sm-6 offset-sm-3 card card-dis'>
            <h3 className='text-center  mt-4 mb-4'>
                <strong>Update Profile</strong>
            </h3> 
            <Form>
              <div className="row mt-2 mb-2">
                <div className="col-6">
                  <label className="mt-2 mb-2 ms-3" >Change Profile Image</label>
                  <Form.File
                    className="position-relative "
                    required
                    name="file"
                    label="File"
                  />
                </div>

                <div className="col-6">
                  <label className="mt-2 mb-2 ms-3" >Change Name</label>
                    <FormControl 
                        className='mt-2 mb-2' 
                        type='text' 
                        placeholder="Enter your name"
                        name="name"
                        value={person.name}
                        onChange={handleChange}
                        autoComplete="off" 
                        id="input-profile"
                    />
                </div>
              </div>
              
              <div className="row mt-4 mb-4">
                <div className="col-6">
                  <label className="mt-2 mb-2 ms-3" >Change Qualification</label>
                    <FormControl 
                        className='mt-2 mb-2' 
                        type='text' 
                        placeholder="update your profile"
                        name="profile"
                        value={person.profile}
                        onChange={handleChange}
                        autoComplete="off" 
                        id="input-profile"
                    />
                </div>

                <div className="col-6">                  
                  <label className="mt-2 mb-2 ms-3" >Change Fee</label>
                    <FormControl 
                      className='mt-2 mb-2' 
                      type='number' 
                      placeholder="Enter your updated fee"
                      name="fee"
                      value={person.fee}
                      onChange={handleChange}
                      autoComplete="off" 
                        id="input-profile"
                    />
                </div>
              </div>
              
              <div className="row mt-3 mb-3">
                <div className="col-6">
                  <label className="mt-2 mb-2 ms-3" >Update Job Profile</label>
                  <FormControl 
                    className='mt-2 mb-2' 
                    type='text' 
                    placeholder="update your profession"
                    name="job"
                    value={person.job}
                    onChange={handleChange}
                    autoComplete="off" 
                    id="input-profile"
                  />

                </div>


                <div className="col-6">
                  <label className="mt-2 mb-2 ms-3" >Update Experiences</label>
                  <FormControl 
                    className='mt-2 mb-2' 
                    type='text' 
                    placeholder="Update about your new Experiences"
                    name="experience"
                    value={person.experience}
                    onChange={handleChange}
                    autoComplete="off" 
                      id="input-profile"
                  />
                </div>
              </div>
              
              <label className="mt-2 mb-2 ms-3" >Change Language</label>
              <FormControl 
                className='mt-2 mb-2' 
                type='text' 
                placeholder="Enter your new languages"
                name="language"
                value={person.language}
                onChange={handleChange}
                autoComplete="off" 
                id="input-profile"
              />
              
              <div className='mt-5 mb-5 ms-3 text-center'>
                <Link href='/doctor/profile'>
                  <Button variant='outline-dark' className='me-4'>
                    Cancel 
                  </Button>
                </Link>
                
                <Button variant='outline-primary' onClick={handleUpdate}>
                  Update 
                </Button>
              </div>
            
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}