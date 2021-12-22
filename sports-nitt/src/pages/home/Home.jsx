import React from "react";
import { Container } from "semantic-ui-react";
import Footer from "../../components/Footer";
import NavbarMain from "../../components/Navbar";
import About from "./About";
import CarouselImg from "./Carousel";
import Video from "./Video";

export default function Home() {
	return (
		<>
			<NavbarMain />
			<CarouselImg />
			<About />
			<Video />
			<Footer />
		</>
	);
}
