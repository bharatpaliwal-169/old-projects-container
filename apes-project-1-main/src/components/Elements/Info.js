import React from 'react';
import '../styles/base.css';
const Info = () => {
  return(
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-sm-4 info-1">
          <h1 className='display-1 mt-5'> Who we are<span className='text-success'>?</span> </h1>
        </div>
        <div className="col-12 col-sm-4 info-2">
          <h2 className='display-3 mt-5 bold info-head'>Digital Apes. </h2>
          
          <div className='liner' ></div>
          
          <i>We create exceptional digital user experiences</i>
          
          <p className='text-muted mt-4'>
            We are a full-scale digital marketing agency that bridges the gap between technology and creativity by creating captivating
            brand stories and exceptional digital experience for end-users.
            We are a group of passionate young individuals who understand the world of web and mobile technology as their home.
          </p>
        </div>
        <div className="col-12 col-sm-4 info-3">
          <h2 className='display-3 mt-5 bold info-head'> What we do?</h2>
          <div className='liner' ></div>
          
          <i>What is marketing if it is not performance driven? </i>
          
          <p className='text-muted mt-4'>
            We are an agency inclined to execute strategic marketing strategies to help our clients build a meaningful
            online community around their brand as well as achieve a high ROI through
            our marketing solutions combined with creative Design and Development across Social Media platforms,
            ensuring a high impact online presence from day one.
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Info;