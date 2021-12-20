import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
	margin: "auto",
	display: "block",
	maxWidth: "100%",
	maxHeight: "100%",
});

export default function Gallery() {
	return (
		<Container maxWidth="md" sx={{ flexGrow: 1 }}>
			<Typography variant="h3" component="div">
				Gallery
			</Typography>
			<div
				style={{
					marginTop: 20,
					marginBottom: 10,
				}}
			>
				<Typography variant="h5" component="div">
					2021
				</Typography>
				<Divider variant="inset" component="div" />
			</div>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 2, sm: 8, md: 12 }}
			>
				{Array.from(Array(5)).map((_, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						<Img
							src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3"
							alt="'bed"
						/>
					</Grid>
				))}
			</Grid>
			<div
				style={{
					marginTop: 20,
					marginBottom: 10,
				}}
			>
				<Typography variant="h5" component="div">
					2020
				</Typography>
				<Divider variant="inset" component="div" />
			</div>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 2, sm: 8, md: 12 }}
			>
				{Array.from(Array(5)).map((_, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						<Img
							src="https://images.unsplash.com/photo-1525097487452-6278ff080c31"
							alt="'bed"
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
