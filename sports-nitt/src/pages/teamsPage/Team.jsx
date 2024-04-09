import React, { useState } from "react";
import NavbarMain from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./team.css";

import teamsContent from "../../assets/content/teams.json";
import { Container, Grid } from "semantic-ui-react";
import TeamsModal from "./TeamsModal";

const SPORTS_ICON_URL =
	"https://raw.githubusercontent.com/SportsNITT/SportsNITT.github.io/main/images/Sport%20Icons/";

export default function Team() {
	const [open, setOpen] = useState(false);
	const [showContent, setShowContent] = useState({});
	return (
		<div
			style={{
				backgroundColor: "#222",
			}}
		>
			<NavbarMain />
			<Container
				style={{
					textAlign: "center",
					backgroundColor: "#222",
					marginTop: "5%",
					marginBottom: "5%",
				}}
			>	
				<h1 style={{ color: "white",fontSize: 50 }}>Sports Teams of NITT</h1>
				<p style={{ color: "white"}}>Click or hover over each sport to know more.</p>
				{open && showContent !== null && (
					<TeamsModal open={open} setOpen={setOpen} team={showContent} />
				)}
				<Grid
					stackable
					columns={3}
					style={{
						backgroundColor: "#222",
					}}
					centered
				>
					{teamsContent.map((team, i) => (
						<Grid.Column key={i}>
							<div
								className="team-container"
								onClick={() => {
									setTimeout(() => setOpen(true), 1000);

									setShowContent(team);
								}}
							>
								<div className="team-container-overlay"></div>
								<img
									class="team-container-image"
									src={`${SPORTS_ICON_URL}${team.teamImgUrl}`}
									alt={team.teamName}
								/>
								<div className="team-container-details fadeIn-bottom">
									<h3>{team.teamName}</h3>
								</div>
							</div>
						</Grid.Column>
					))}
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}
