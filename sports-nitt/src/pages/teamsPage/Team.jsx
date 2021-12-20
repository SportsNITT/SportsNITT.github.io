import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import NavbarMain from '../../components/Navbar';
import "./team.css";

import teamsContent from "../../assets/content/teams.json";

const TeamCard = ({ data }) => (
	<div class="cardcontainer">
		<div
			class="banner-img"
			style={{
				backgroundImage: `url(${data.teamImgUrl})`,
				backgroundRepeat: "no-repeat",
			}}
		>
			<h4 class="team">{data.teamName}</h4>
		</div>
		<div className="img-container">
			<div className="profile">
				<img src={data.capImgUrls[0]} alt="captain-img" class="profile-img" />
				<p class="name" style={{ color: "#ff8b00" }}>{data.captainNames[0]}</p>
			</div>
			{data.captainNames[1] && (
				<div className="profile">
					<img src={data.capImgUrls[1]} alt="captain-img" class="profile-img" />
					<p class="name" style={{ color: "#ff8b00" }}>{data.captainNames[1]}</p>
				</div>
			)}
		</div>
	</div>
);

export default function Teams() {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(teamsContent);
		console.log(teamsContent);
	}, []);
	return (

		<Box style={{ backgroundColor: "black" }} sx={{ flexGrow: 1 }}>
			<NavbarMain />
			<Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 3, sm: 8, md: 12 }}>
				{data &&
					data.map((value, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<TeamCard key={index} data={value} />
						</Grid>

					))}


			</Grid>
		</Box>

	);
}
