import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../data/SkillsImage';
import AboutImage from "../assets/images/meanwhile.png"
import "../pages/style.css";

function AboutPage() {
	return (
		<div>
			<Container>
				{/* Row containing the about section */}
				<Row className="mt-3 pt-3">
					<Col md={5} className="py-5">
						{/* Div for styling the image */}
						<div className="about my-5 py-5 text-center">
							<img src={AboutImage} alt="" srcset="" />
						</div>
					</Col>
					<Col md={7} className="my-5 py-5">
						<h2>About Me</h2>
						{/* Horizontal line */}
						<hr></hr>
						<p className="my-5 fs-5">
							<span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						{/* Skills section */}
						<div className="skillsContainer mt-5 pt-5">
							{/* Marquee component for scrolling skills */}
							<div>
							<Marquee
									play={true}
									direction="right"
								>
									{skillsData.map((skill, id) => (
										<div className="skill--box" key={id} >
											<img className='skill-image' src={skillsImage(skill)} alt={skill} />
											<p>{skill}</p>
										</div>
									))}
								</Marquee>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div >
	)
}

export default AboutPage