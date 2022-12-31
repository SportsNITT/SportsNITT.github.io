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
import Winners from "./Winners";

export default function Sportsfete() {
	return (
		<div style={{ backgroundColor: "#222" }}>
			<NavbarMain />
			<Intro
				title="SportsFete'23 Inductions"
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
					drive={sportsfete["SF'22_aftermovie_link"]}
					title={"Sportsfete'22"}
					data={sportsfete.winners_2022}
				/>
				<div>
					<iframe  src={sportsfete["SF'22_aftermovie_link"]}  width={"100%"}
				height={window.innerWidth <= 480 ? "360px" : "600px"} title='SportsFete`22 Aftermovie' allow="autoplay"></iframe>
				</div>
				<Video
					utube={sportsfete["SF'19_aftermovie_link"]}
					title={"Sportsfete'19"}
					data={sportsfete.winners_2019}
				/>
				{/* <Winners data={sportsfete.winners_2019} /> */}
				<Video
					utube={sportsfete["SF'18_aftermovie_link"]}
					title={"Sportsfete'18"}
					data={sportsfete.winners_2018}
				/>
				{/* <Winners data={sportsfete.winners_2018} /> */}
				<Contact
					contact={sportsfete.sportsfete_chairman}
					links={sportsfete.social_media}
				/>
			</Container>
			<Footer />
		</div>
	);
}
