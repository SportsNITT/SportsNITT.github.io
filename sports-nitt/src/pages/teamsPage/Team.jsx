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
		<div className="img-container">
			<div className="profile">
				<img src={data.capImgUrls[0]} alt="captain-img" class="profile-img" />
				<p class="name">{data.captainNames[0]}</p>
			</div>
			{data.captainNames[1] && (
				<div className="profile">
					<img src={data.capImgUrls[1]} alt="captain-img" class="profile-img" />
					<p class="name">{data.captainNames[1]}</p>
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
		<Container maxWidth="sm" class="wrapper-grid">
			{data &&
				data.map((value, index) => <TeamCard key={index} data={value} />)}
		</Container>
	);
}
