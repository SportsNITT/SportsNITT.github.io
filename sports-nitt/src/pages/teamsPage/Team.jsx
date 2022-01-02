import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import { Grid } from "@mui/material";
import NavbarMain from "../../components/Navbar";
import Footer from "../../components/Footer";
// import "./team.css";

import teamsContent from "../../assets/content/teams.json";
import { Container, Grid, Image } from "semantic-ui-react";
const CAPTAINS_IMG_URL =
	"https://raw.githubusercontent.com/SportsNITT/SportsNITT.github.io/main/images/Captains%20Photos/";
const SPORTS_ICON_URL =
	"https://raw.githubusercontent.com/SportsNITT/SportsNITT.github.io/main/images/Sport%20Icons/";

// const TeamCard = ({ data }) => (
// 	<div class="cardcontainer">
// 		<div
// 			class="banner-img"
// 			style={{
// 				backgroundImage: `url(${data.teamImgUrl})`,
// 				backgroundRepeat: "no-repeat",
// 			}}
// 		>
// 			<h4 class="team">{data.teamName}</h4>
// 		</div>
// 		<div className="img-container">
// 			<div className="profile">
// 				<img src={data.capImgUrls[0]} alt="captain-img" class="profile-img" />
// 				<p class="name" style={{ color: "#ff8b00" }}>
// 					{data.captainNames[0]}
// 				</p>
// 			</div>
// 			{data.captainNames[1] && (
// 				<div className="profile">
// 					<img src={data.capImgUrls[1]} alt="captain-img" class="profile-img" />
// 					<p class="name" style={{ color: "#ff8b00" }}>
// 						{data.captainNames[1]}
// 					</p>
// 				</div>
// 			)}
// 		</div>
// 	</div>
// );

// export default function Teams() {
// 	const [data, setData] = useState([]);

// 	useEffect(() => {
// 		setData(teamsContent);
// 		console.log(teamsContent);
// 	}, []);
// 	return (
// 		<Box style={{ backgroundColor: "black" }} sx={{ flexGrow: 1 }}>
// 			<NavbarMain />
// 			<Grid
// 				container
// 				spacing={{ xs: 2, md: 2 }}
// 				columns={{ xs: 3, sm: 8, md: 12 }}
// 			>
// 				{data &&
// 					data.map((value, index) => (
// 						<Grid item xs={2} sm={4} md={4} key={index}>
// 							<TeamCard key={index} data={value} />
// 						</Grid>
// 					))}
// 			</Grid>
// 			<Footer />
// 		</Box>
// 	);
// }

export default function Team() {
	console.log(process.env.SPORTS_ICON_URL);
	return (
		<Container
			style={{
				backgroundColor: "#222",
			}}
		>
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
						<Image
							src={`${SPORTS_ICON_URL}${team.teamImgUrl}`}
							width="100%"
							style={{
								backgroundColor: "#fff",
							}}
						/>
					</Grid.Column>
				))}
			</Grid>
		</Container>
	);
}
