import React from 'react';
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Head from 'next/head'

const Layout = ({children}) =>{
	return(
		<React.Fragment>
			<Head>
					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Fitapes</title>
					<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;1,600&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			</Head>
			<Header />
				{children}
			<Footer />
		</React.Fragment>
	)
}
export default Layout