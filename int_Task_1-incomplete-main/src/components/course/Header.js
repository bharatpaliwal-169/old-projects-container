import React from 'react';
import ReactPlayer from "react-player";
import Card from './Card';

export default function Header(props) {
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <div className='row  course-title'>
          <div className='col-12 text-center display-3 mb-3'>{props.courseTitle}</div>
        </div>

        <div className='mt-5 row text-center mb-5'>
          <div className='col-12 text-center col-md-4'>
            <Card {...props} />
          </div>

          <div className='col-12 col-md-4'>
            <ReactPlayer url={props.videoUrl} rel="noopener noreferrer"
              controls loop />
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}
