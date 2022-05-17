import React from 'react'
import data from '../../Data/tutor';
import TutorCard from './TutorCard'

export default function Profile() {
  return (
    <React.Fragment>
      <div className='container'> 
        <div className='row'> 
        {data.map(item => {
          return (
              <TutorCard {...item} key={item.id} />
          )
        })}
        </div>
      </div>
    </React.Fragment>
  )
}
