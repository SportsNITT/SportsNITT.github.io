import React from "react";
import { Container } from "semantic-ui-react";
import Footer from "../../components/Footer";
import NavbarMain from "../../components/Navbar";
import { colors } from "../../utils/colors";
import About from "./About";
import CarouselImg from "./Carousel";
import Video from "./Video";

export default function Home() {
	return (
		<>
			<NavbarMain />
			<CarouselImg />
			<Container style={{ backgroundColor: colors.primary }}>
				<Video />
			</Container>
			<Footer />
		</>
	);
}
