import React, { useEffect, useState } from "react";

import { Container } from "@mui/material";

// import "./team.css";

import sportsfeteContent from "../../assets/content/sportsfete.json";

// const TeamCard = ({ data }) => (
// 	<div class="container">
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
// 				<p class="name">{data.captainNames[0]}</p>
// 			</div>
// 			{data.captainNames[1] && (
// 				<div className="profile">
// 					<img src={data.capImgUrls[1]} alt="captain-img" class="profile-img" />
// 					<p class="name">{data.captainNames[1]}</p>
// 				</div>
// 			)}
// 		</div>
// 	</div>
// );

export default function Sportsfete() {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(sportsfeteContent);
		// console.log(teamsContent);
	}, []);
	return (
		<Container maxWidth="sm" class="wrapper-grid">
			<h2>Sportsfete</h2>
      <div>{data.introduction}</div>
      <h3>Sports Conducted</h3>
      {data.sports}

		</Container>
	);
}