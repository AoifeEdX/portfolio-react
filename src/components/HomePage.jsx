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
						<Text />
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
				<Row className="my-5 py-5">
					<Col md={12}>
						<h2 className="text-center">Welcome to my <span>portfolio</span></h2>
						<hr></hr>
						<p className="my-5 fs-5">
							<span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p className="my-5 fs-5">
						<span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default HomePage