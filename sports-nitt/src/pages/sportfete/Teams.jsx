import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import { colors } from "../../utils/colors";

const Teams = ({ data }) => (
	<div
		style={{
			marginTop: "5%",
			marginBottom: "20px",
		}}
	>
		<h1
			style={{
				textAlign: "center",
				color: colors.secondary,
			}}
		>
			Team
		</h1>
		<Grid stackable columns={2}>
			{data.map((team, i) => (
				<Grid.Column
					data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
					data-aos-duration="2000"
				>
					<Segment>
						<h1
							style={{
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "2em",
								color: colors.liteGrey,
							}}
						>
							{team.name}
						</h1>
						<Divider />
						<p
							style={{
								textAlign: "center",
								fontFamily: "Open Sans",
								fontSize: "1em",
								color: colors.grey,
							}}
						>
							{team.JD}
						</p>
					</Segment>
				</Grid.Column>
			))}
		</Grid>
	</div>
);

export default Teams;
