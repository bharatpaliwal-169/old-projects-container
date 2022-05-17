import React from 'react'
import data from './data';
import Header from './Header';
import Body from './Body';
import Info from './Info';
import NavbarMain from '../NavbarMain';
import Footer from '../Footer';
export default function Course() {
  
  return (
    <React.Fragment>
      <NavbarMain />
      {data.map((item)=> {
        return(
          <React.Fragment>
            <Header {...item} />
            <Body {...item}/>
            <Info />
          </React.Fragment>
        )
      })}
      <Footer />
    </React.Fragment>
  )
}
