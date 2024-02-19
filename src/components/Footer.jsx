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
			</div>
		</footer>
	);
}

export default Footer;