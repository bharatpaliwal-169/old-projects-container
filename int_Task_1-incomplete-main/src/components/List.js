import React from 'react'
import Card from './ItemCard';
import data from '../Data/courses';
import {Link} from 'react-router-dom';

export default function List() {
  return (
    <React.Fragment>
      <div className='container-fluid'> 
        <div className='row ml-3 mr-3'>
          <div className='col-12 text-center'>
              <p className='display-4 mt-2 mb-2'> Trending Courses </p>

              <div className='float-right mt-1 mr-4'>
                <Link to='/'>
                  view all
                </Link>
              </div>
            </div>
            {data.map(item => {
                return (
                    <Card {...item} key={item.id} />
                )
              })}
          </div>
      </div>
    </React.Fragment>
  )
}
