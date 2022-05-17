import React from 'react';
import NavbarDashboard from './StuNavbar';
import Footer from '../../components/Footer';
import NoticeBoard from './NoticeBoard';


export default function Dashboard() {
  return (
    <React.Fragment>
      <NavbarDashboard /> 
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-7'>
            View
          </div>
          <div className='col-12 col-md-3 offset-md-1'>
            <NoticeBoard />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
