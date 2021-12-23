import React from "react";

import "./intro.css";

export default function Intro({ title, desc, formLink }) {
	return (
		<div class="hero-image">
			<div class="hero-text">
				{/* <img src={logo} alt="logo" /> */}
				<h1>{title}</h1>
				<p>{desc}</p>
				{/* <button href={formLink} class="btn-default">
					Join
				</button> */}
				<form action={formLink}>
					<input
						formTarget="_blank"
						type="submit"
						value="Join"
						class="btn-default"
					/>
				</form>
			</div>
		</div>
	);
}
