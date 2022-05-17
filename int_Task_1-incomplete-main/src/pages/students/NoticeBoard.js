import React from 'react'

export default function NoticeBoard() {
  return (
    <React.Fragment>
      
      <div className='card mt-4 text-center'>
        <h4 className='card-header  mb-3'> Notice Board </h4>
        <div className='card-body text-left'>
          <p> &bull; You have a new test scheduled tommorow.  </p>
          <p> &bull; You have 3 new Assignments scheduled this week.  </p>
        </div>
      </div>
      
    </React.Fragment>
  )
}
