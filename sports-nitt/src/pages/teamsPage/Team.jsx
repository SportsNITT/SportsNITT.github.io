import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

import "./team.css";

import teamsContent from "../../assets/content/teams.json";

const TeamCard = ({ data }) => (
	<div class="container">
		<div
			class="banner-img"
			style={{
				backgroundImage: `url(${data.teamImgUrl})`,
				backgroundRepeat: "no-repeat",
			}}
		>
			<h4 class="team">{data.teamName}</h4>
		</div>
		<img src={data.capImgUrl} alt="captain-img" class="profile-img" />
		<h1 class="name">{data.captainName}</h1>
	</div>
);

export default function Teams() {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(teamsContent);
		console.log(teamsContent);
	}, []);
	return (
		<Container maxWidth="sm" class="wrapper-grid">
			{data &&
				data.map((value, index) => <TeamCard key={index} data={value} />)}
		</Container>
	);
}
