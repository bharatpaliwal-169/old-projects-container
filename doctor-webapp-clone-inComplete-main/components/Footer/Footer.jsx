import React from 'react'
import Style from '../../styles/footer.module.css'

function Footer() {
	return (
		<React.Fragment>
			<div className={Style.footer}>
				<div className="container">
					<div className="row">
							<div className="col-6 col-md-2">
									<div className={Style.locations}>
											<h4 className={Style.footer_heading}>Delhi</h4>
											<ul>
													<li><a href="#">Dentist in Delhi</a></li>
													<li><a href="#">General Physicians in Delhi</a></li>
													<li><a href="#">Gyanecologist in Delhi</a></li>
													<li><a href="#">Psychiatrist in Delhi</a></li>
													<li><a href="#">Dermatologist in Delhi</a></li>
													<li><a href="#">Neurologist in Delhi</a></li>
													<li><a href="#">Urologist in Delhi</a></li>
													<li><a href="#">Opthelmologist in Delhi</a></li>
													<li><a href="#">Sexologist in Delhi</a></li>
											</ul>
									</div>
							</div>
							<div className="col-6 col-md-3">
									<div className={Style.locations}>
											<h4 className={Style.footer_heading}>Mumbai</h4>
											<ul>
													<li><a href="#">Dentist in Mumbai</a></li>
													<li><a href="#">General Physicians in Mumbai</a></li>
													<li><a href="#">Gyanecologist in Mumbai</a></li>
													<li><a href="#">Psychiatrist in Mumbai</a></li>
													<li><a href="#">Dermatologist in Mumbai</a></li>
													<li><a href="#">Neurologist in Mumbai</a></li>
													<li><a href="#">Urologist in Mumbai</a></li>
													<li><a href="#">Opthelmologist in Mumbai</a></li>
													<li><a href="#">Sexologist in Mumbai</a></li>
											</ul>
									</div>
							</div>
							<div className="col-6 col-md-3">
									<div className={Style.locations}>
											<h4 className={Style.footer_heading}>Chennai</h4>
											<ul>
													<li><a href="#">Dentist in Chennai</a></li>
													<li><a href="#">General Physicians in Chennai</a></li>
													<li><a href="#">Gyanecologist in Chennai</a></li>
													<li><a href="#">Psychiatrist in Chennai</a></li>
													<li><a href="#">Dermatologist in Chennai</a></li>
													<li><a href="#">Neurologist in Chennai</a></li>
													<li><a href="#">Urologist in Chennai</a></li>
													<li><a href="#">Opthelmologist in Chennai</a></li>
													<li><a href="#">Sexologist in Chennai</a></li>
											</ul>
									</div>
							</div>
							<div className="col-6 col-md-2">
									<div className={Style.locations}>
											<h4 className={Style.footer_heading}>Banglore</h4>
											<ul>
													<li><a href="#">Dentist in Banglore</a></li>
													<li><a href="#">General Physicians in Banglore</a></li>
													<li><a href="#">Gyanecologist in Banglore</a></li>
													<li><a href="#">Psychiatrist in Banglore</a></li>
													<li><a href="#">Dermatologist in Banglore</a></li>
													<li><a href="#">Neurologist in Banglore</a></li>
													<li><a href="#">Urologist in Banglore</a></li>
													<li><a href="#">Opthelmologist in Banglore</a></li>
													<li><a href="#">Sexologist in Banglore</a></li>
											</ul>
									</div>
							</div>
							<div className="col-6 col-md-2">
									<div className={Style.locations}>
											<h4 className={Style.footer_heading}>Example.com</h4>
											<ul>
													<li><a href="#">About us</a></li>
													<li><a href="#">Careers</a></li>
													<li><a href="#">Mobile Apps</a></li>
													<li><a href="#">Blogs</a></li>
													<li><a href="#">Terms of use</a></li>
													<li><a href="#">Privacy policy</a></li>
													<li><a href="#">Press</a></li>
											</ul>
									</div>
							</div>
					</div>
					<div className={Style.footer_btm}>
						<div className="row">
							<div className="col-12 col-md-10">
									<ul>
											<li><a href="#">City Index</a></li>
											<li><a href="#">Locality City Index</a></li>
											<li><a href="#">Specialty Index</a></li>
											<li><a href="#">Specialty City Index</a></li>
											<li><a href="#">Health Wiki</a></li>
											<li><a href="#">Health Tips Index</a></li>
											<li><a href="#">Health Question Index</a></li>
											<li><a href="#">Health Quizzes Index</a></li>
											<li><a href="#">Health Topics Index</a></li>
											<li><a href="#">Medicines Index</a></li>
											<li><a href="#">Ailment Index</a></li>
											<li><a href="#">Health Packages Index</a></li>
											<li><a href="#">Labs Test Index</a></li>
									</ul>
							</div>
							<div className="col-12 col-md-2">
									<ul>
											<li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter"></i></a></li>
											<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Footer
