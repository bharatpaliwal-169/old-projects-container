import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function Loader() {
  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className="row mt-5">
          <div className="col-12 text-center mt-5">
            <span className='h2 text-danger'>
              Loading 
            </span>

            <Spinner animation="border" variant="danger" className="ms-2" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
