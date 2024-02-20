import React, { useState } from "react";
import "../pages/style.css";

function Footer() {
	return (
		<footer className="footer text-center mt-5 pt-5">
			{/* Horizontal line */}
			<hr></hr>
			<div className="my-5">
				<p>
					© Copyright 2024</p>
				<p> Designed & built by <strong>AoifeEdX</strong>
				</p>
				<p> Observe this <a rel="noopener noreferrer"	className="link-danger link-offset-2 link-underline-opacity-0 link-underline-opacity-25-hover"href="https://aoifeedx.github.io/portfolio-bootstrap/assets/images/goat-blep.png" target="_blank">goat</a>.
				</p>
			</div>
		</footer>
	);
}

export default Footer;