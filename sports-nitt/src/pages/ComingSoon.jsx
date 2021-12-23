import React from "react";
import ball from "../assets/images/ball.gif";
import Footer from "../components/Footer";
import NavbarMain from "../components/Navbar";
import { colors } from "../utils/colors";

export default function ComingSoon() {
	return (
		<div
			style={{
				textAlign: "center",
				height: "100vh",
				scrollBehavior: "smooth",
				backgroundColor: "#222",
			}}
		>
			<NavbarMain />
			<div
				style={{
					marginBottom: "20px",
					height: "70vh",
				}}
			>
				<img src={ball} width={320} alt="ball" />
				<p
					style={{
						marginBottom: "20px",
						fontFamily: "Open Sans",
						fontWeight: 700,
						fontSize: "2.5em",
						color: colors.grey,
					}}
				>
					COMING SOON...
				</p>
			</div>
			<Footer />
		</div>
	);
}
