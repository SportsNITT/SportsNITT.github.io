import React from "react";
import ball from "../assets/images/ball.gif";
import Footer from "../components/Footer";
import NavbarMain from "../components/Navbar";

export default function ComingSoon() {
	return (
		<div
			style={{
				textAlign: "center",
				height: "100vh",
			}}
		>
			<NavbarMain />
			<img src={ball} width={320} alt="ball" />
			<p
				style={{
					marginBottom: "20px",
					fontFamily: "Open Sans",
					fontWeight: 700,
					fontSize: "2.5em",
					color: "white",
				}}
			>
				COMING SOON...
			</p>
			<Footer />
		</div>
	);
}
