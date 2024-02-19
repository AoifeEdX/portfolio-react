import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Text from './Text'
import { FaGithub, FaLinkedinIn, FaRedditAlien, FaInstagram } from "react-icons/fa";
import profile from "../assets/images/profile.png"
import "../pages/style.css";

function HomePage() {
	return (
		<div>
			<Container>
				<Row className="my-5 py-5">
					<Col md={6}>
						{/* Avatar picture */}
						<div className="profile text-center">
							<img src={profile} alt="" />
						</div>
					</Col>
					<Col md={6} className="my-5 p-5">
						{/* Waving emoji */}
						<h2>Hello! <span className='wave'>👋 </span></h2>
						<h2>I am Aoife, and I am a</h2>
						{/* Typewriter style text */}
						<div className="mb-5 pb-5">
							<Text />
						</div>
						{/* Social links */}
						<div className="mt-5">
							<a href="https://github.com/AoifeEdX" target="_blank" rel="noopener noreferrer"><FaGithub className='fs-2 me-5 text-danger' /></a>
							<a href="https://www.linkedin.com/in/aoifenidhonnacha/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='fs-2 me-5 text-danger' /></a>
							<a href="https://www.reddit.com/user/AoifeEdX" target="_blank" rel="noopener noreferrer"><FaRedditAlien className='fs-2 me-5 text-danger' /></a>
							<a href="https://instagram.com/aoife.z.dunphy" target="_blank" rel="noopener noreferrer"><FaInstagram className='fs-2 text-danger' /></a>
						</div>
					</Col>
				</Row>
				{/* Section for some body text */}
				<Row className="my-5 py-5 body-text">
					<Col md={12}>
						<h2 className="text-center">Welcome to my <span>portfolio</span></h2>
						<div className="fs-5">
							<hr></hr>
							<p className="mt-5">
								I am a passionate <span>web developer</span> with experience in building responsive and dynamic websites. I specialize in creating <span>clean, elegant, and user-friendly solutions</span> for various web development needs.
							</p>
							<p className="mt-5">
								I have a strong background in <span>HTML, CSS, JavaScript,</span> and various web development frameworks. I am committed to staying up-to-date with the latest web technologies and best practices to deliver high-quality solutions that meet my clients' needs.
							</p></div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default HomePage