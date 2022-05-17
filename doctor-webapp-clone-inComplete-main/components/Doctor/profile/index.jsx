import React , {useState,useEffect} from 'react';
import Available from './Available'
import Desp from './Desp';
// import Styles from '../../../styles/profile.module.css';
import Download from '../../Download'
import Loader from '../../Loader'
import ProfileCard from './Card'

export default function Profile() {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if(loading) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-sm-3 d-none d-sm-block'>xyz</div>
          <div className='col-12 col-sm-6 mt-3'>
            <ProfileCard />
            <Desp />
          </div>
          <div className='col-12 col-sm-3'>
            <Available />
          </div>
        </div>
        
      </div>
      <Download />
    </React.Fragment>
  )
}
