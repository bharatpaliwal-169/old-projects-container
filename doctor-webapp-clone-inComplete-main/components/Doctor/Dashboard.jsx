import React from 'react'
import Link from 'next/link';

export default function Dashboard() {
  return (
    <React.Fragment>
        Dashboard Landing page for doctor.
        <br/>
        <Link href='/doctor/profile'>
          <a>Profile</a>
        </Link>
        <br />
        <Link href='/doctor/profile/update' >
          <a> Profile/update </a>
        </Link>
      </React.Fragment>
  )
}
