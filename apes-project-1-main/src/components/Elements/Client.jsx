import React from 'react';
import '../styles/base.css';
import Item from './Item';
import data from './Data';

const Client = () => {
  return (
    <>
      <div className="row client-body">
        <div className="col-12 text-center bg-dark text-white">
          <p className="client"> Our Clients </p> <br/>
        </div>
            {data.map((item) => {
              return (
                <Item {...item} />
                )
              })}
      </div>
    
      </>
  )
}

export default Client;