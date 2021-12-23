import React from "react";
import Footer from "../../components/Footer";
import NavbarMain from "../../components/Navbar";
import Sports from "./Sports";
import sportsfete from "../../assets/content/sportsfete.json";
import Teams from "./Teams";
import Intro from "./Intro";
import About from "./About";
import { Container } from "react-bootstrap";
import "../../App.css";
import Video from "./Video";
import Contact from "./Contact";

export default function Sportsfete() {
	return (
		<div style={{ backgroundColor: "#222" }}>
			<NavbarMain />
			<Intro
				title={sportsfete.inductions_title}
				desc={sportsfete.inductions_description}
				formLink={sportsfete.inductions_form_link}
			/>

			<Container
				style={{
					backgroundColor: "#222",
				}}
			>
				<About />
				<Sports data={sportsfete.sports} />
				<Teams data={sportsfete.teams} />
				<Video
					utube={sportsfete["SF'19_aftermovie_link"]}
					title={"Sportsfete'19"}
				/>
				<Video
					utube={sportsfete["SF'18_aftermovie_link"]}
					title={"Sportsfete'18"}
				/>
				<Contact
					contact={sportsfete.sportsfete_chairman}
					links={sportsfete.social_media}
				/>
			</Container>
			<Footer />
		</div>
	);
}
