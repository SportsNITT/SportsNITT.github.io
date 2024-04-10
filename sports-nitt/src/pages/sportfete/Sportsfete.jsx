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
import { colors } from "../../utils/colors";


export default function Sportsfete() {
	return (
		<div style={{ backgroundColor: "#222" }}>
			<NavbarMain />
			<Intro
				title="SportsFete'24 Inductions"
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

				<div style={{ margin: "7% 0" }}>

				<Video
					drive={sportsfete["SF'23_aftermovie_link"]}
					title={"Sportsfete'23 Winner's"}

					data={sportsfete.winners_2023}
				/>
				<h1
				style={{
					fontSize: "2.5rem",
					margin: "3% 0",
					textAlign: "center",
					color: colors.secondary,
				}}
			>
				{"SportsFete'23 Aftermovie"}
			</h1>
					<iframe  src={sportsfete["SF'22_aftermovie_link"]}  width={"100%"}
				height={window.innerWidth <= 480 ? "360px" : "600px"} title='SportsFete`23 Aftermovie' allow="autoplay"></iframe>
				</div>
				
				<h1
				style={{
					textAlign: "center",
					fontSize: "2.5rem",
					// margin: "5% 0",
					color: colors.secondary,
				}}
			>
				{"Past Winners"}
			</h1>
				<Video
					drive={sportsfete["SF'22_aftermovie_link"]}
					title={"Sportsfete'22 Winner's"}

					data={sportsfete.winners_2022}
				/>
				
				<Video
					utube={sportsfete["SF'19_aftermovie_link"]}
					title={"Sportsfete'19 Winner's"}
					data={sportsfete.winners_2019}
				/>
				{/* <Winners data={sportsfete.winners_2019} /> */}
				<Video
					utube={sportsfete["SF'18_aftermovie_link"]}
					title={"Sportsfete'18 Winner's"}
					data={sportsfete.winners_2018}
				/>
				{/* <Winners data={sportsfete.winners_2018} /> */}
				{/* <Contact
					contact={sportsfete.sportsfete_chairman}
					links={sportsfete.social_media}
				/> */}
			</Container>
			<Footer />
		</div>
	);
}


// text-align: center; color: rgb(255, 139, 0);