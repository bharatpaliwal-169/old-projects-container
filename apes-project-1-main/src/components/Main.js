import React from 'react';
import Home from './Home';
import NavbarPage from './NavbarPage';
import Footer from './Footer';
import './styles/base.css';
const Main = () => {
  return(
    <React.Fragment>
        <NavbarPage />
        <Home />
        <Footer />
    </React.Fragment>
  )
}
export default Main;