import React from 'react';
import Link from 'next/link'

export default function Download() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row light-blue">
          <section className='col-12 text-center mt-4'>
            <h1 className='mt-3 dwnhead'> DOWNLOAD APP </h1>
          </section>
          <section className='col-6 col-sm-3 mb-2 offset-sm-2'>
            <Link href='#'>
              <a>
                <img src='/images/app_btn/google.png' alt='buttons' className='img-fluid'/>
              </a>
            </Link>
          </section>
          <section className='col-6 col-sm-3 mb-2 offset-sm-2'>
          <Link href='#'>
              <a>
                <img src='/images/app_btn/apple.png' alt='buttons' className='img-fluid'/>
              </a>
            </Link>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}
