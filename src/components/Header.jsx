import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import "../pages/style.css";

function Header() {
	const closeNavMenu = () => {
		document.querySelector(".navbar-collapse").classList.remove("show");
	};

	return (
		<Container>
			{/* Bootstrap responsive navbar */}
			<Navbar expand="md" className="navbar py-3">
				<Navbar.Brand as={NavLink} to="/" onClick={closeNavMenu}>
					<div className="navbar-brand fs-1 fw-bold">
						Aoife<span className="text-danger">EdX</span>
					</div>
				</Navbar.Brand>
				{/* Toggle for mobile*/}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
					<Nav className="ms-auto" defaultActiveKey="#home">
						{['About', 'Projects', 'Contact'].map((item, index) => (
							<Nav.Item key={index}>
								<NavLink
									className="nav-link mx-3 fs-5 fw-bold text-end"
									style={({ isActive }) => (
										{
											color: isActive ? '#de5555' : '',
										}
									)}
									to={`/${item.toLowerCase()}`}
									onClick={closeNavMenu}
								>
									{item}
								</NavLink>

							</Nav.Item>
						))}
						{/* Button to download PDF CV */}
						<a
							href={Resume}
							download="#"
							className="btn btn-outline-danger ms-4 fs-5"
						><FaFileAlt className="me-2 pb-1"/>
							 Resume
						</a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
}

export default Header;
