import React from "react";

import "./intro.css";

export default function Intro({ title, desc, formLink }) {
	return (
		<div className="hero-image">
			<div className="hero-text">
				{/* <img src={logo} alt="logo" /> */}
				<h1 
				style={{
					textAlign: "center",
					fontSize: "2.5rem",
					// margin: "5% 0",
					color: "#fff",
				}}
				>{title}</h1>
				<p>{desc}</p>
				{/* <button href={formLink} class="btn-default">
					Join
				</button> */}
				<form action={formLink}>
				{/* <form> */}
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
