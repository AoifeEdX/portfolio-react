import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../data/SkillsImage';
import AboutImage from "../assets/images/meanwhile.png"
import "../pages/style.css";

function AboutPage() {
	return (
		<div>
			<Container className="mt-3 pt-3">
				{/* Row containing the about section */}
				<Row className="mt-3 pt-3">
					<Col md={5} >
						{/* Div for styling the image */}
						<div className="about my-5 py-5 text-center">
							<img src={AboutImage} alt="" srcset="" />
						</div>
					</Col>
					<Col md={7}>
						<h2>About Me</h2>
						{/* Horizontal line */}
						<hr></hr>
						<div className="my-5 fs-5">
						<p className="mt-5">
						I am a passionate <span>web developer</span> with experience in building responsive and dynamic websites. I specialize in creating <span>clean, elegant, and user-friendly solutions</span> for various web development needs.
						</p>
						<p className="mt-5">
						I have a strong background in <span>HTML, CSS, JavaScript,</span> and various web development frameworks. I am committed to staying up-to-date with the latest web technologies and best practices to deliver high-quality solutions that meet my clients' needs.</p></div>
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