import React from 'react';
import NavbarDashboard from './NavbarDashboard';
import Footer from '../../components/Footer';

export default function Dashboard() {
  return (
    <React.Fragment>
      <NavbarDashboard /> 
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            View
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}
