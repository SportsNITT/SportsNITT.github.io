import React from "react";
import { Container } from "semantic-ui-react";
import Footer from "../../components/Footer";
import NavbarMain from "../../components/Navbar";
import { colors } from "../../utils/colors";
import About from "./About";
import CarouselImg from "./Carousel";
import SportsfeteInductions from "./SportsfeteInductions";
import Inductions from "./inductions";
import Stats from "./Stats";

export default function Home() {
	return (
		<>
			<NavbarMain />
			<CarouselImg />
			<Container style={{ backgroundColor: colors.primary }}>
				{/* <Video /> */}
				<About />
				<Stats />
				<Inductions utube={"https://www.youtube.com/watch?v=5d70n6jzoVE"}/>
				<hr/>
				<SportsfeteInductions/>
			</Container>
			<Footer />
		</>
	);
}
