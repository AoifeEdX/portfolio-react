import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FaRegEnvelope, FaPhone } from "react-icons/fa";
import "../pages/style.css";

function ContactPage() {
  const [email, setEmail] = useState(""); // State to manage email address
  const [name, setName] = useState(""); // State to manage name input
  const [message, setMessage] = useState(""); // State to manage message input

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

	return (
		<div>
			{/* Container for the contact section */}
			<Container>
				{/* Row for the header */}
				<Row className="mt-3 pt-3">
					<Col md={12} className="mt-5 pt-5">
						<h2>Contact Me</h2>
						{/* Horizontal line */}
						<hr />
					</Col>
				</Row>
				<Row>
					{/* Column for the contact information */}
					<Col md={7}>
						{/* Contact phone */}
						<p className="my-5 fs-5">
							<a
								href="tel:+440123456789"
								target="_blank"
								rel="noopener noreferrer"
								className="link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-25-hover"
							>
								{/* Phone icon */}
								<FaPhone className='fs-2 me-2 text-danger me-4' />
								+44 01 2345 6789
							</a>
						</p>
						{/* Contact email */}
						<p className="my-5 fs-5">
							<a
								href="mailto:aoife.z.dunphy@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								className="link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-25-hover"
								onClick={() => setEmail("aoife.z.dunphy@gmail.com")}
							>
								{/* Email icon */}
								<FaRegEnvelope className='fs-2 me-2 text-danger me-4' />
								aoife.z.dunphy@gmail.com
							</a>
						</p>
						{/* Introduction */}
						<p className="my-5 fs-5">
							<span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</Col>
					{/* Column for the contact form */}
					<Col md={5} className="p-5">
						<form onSubmit={handleSubmit}>
							{/* Input field for name */}
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									className="form-control"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							{/* Input field for email */}
							<div className="form-group my-3">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							{/* Textarea for message */}
							<div className="form-group my-3">
								<label htmlFor="message">Message</label>
								<textarea
									className="form-control"
									id="message"
									rows="5"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>
							{/* Submit button */}
							<Button type="submit" className="my-3" variant="danger" style={{ width: "100%" }}>Submit</Button>
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
	
};

export default ContactPage;
