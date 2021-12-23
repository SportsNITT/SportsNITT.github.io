import React from "react";
import { Statistic, Icon, Grid } from "semantic-ui-react";
import { colors } from "../../utils/colors";

export default function Stats() {
	return (
		<div
			style={{
				marginTop: "20px",
				marginBottom: "20px",
			}}
		>
			{/* <Statistic.Group
				size="small"
				widths="four"
				style={{ color: colors.secondary }}
			> */}
			<Grid stackable columns={3} style={{ textAlign: "center" }}>
				<Grid.Column>
					<Statistic>
						<Statistic.Value style={{ color: colors.grey }}>
							<Icon name="heart" fontSize="inherit" />
							<br />
							<p style={{ color: colors.secondary, fontFamily: "Open Sans" }}>
								{6}
							</p>
						</Statistic.Value>
						<Statistic.Label style={{ color: colors.grey }}>
							Core members
						</Statistic.Label>
					</Statistic>
				</Grid.Column>
				<Grid.Column>
					<Statistic>
						<Statistic.Value style={{ color: colors.grey }}>
							<Icon name="users" fontSize="inherit" />
							<br />
							<p style={{ color: colors.secondary, fontFamily: "Open Sans" }}>
								{17}
							</p>
						</Statistic.Value>
						<Statistic.Label style={{ color: colors.grey }}>
							Teams
						</Statistic.Label>
					</Statistic>
				</Grid.Column>
				<Grid.Column>
					<Statistic>
						<Statistic.Value style={{ color: colors.grey }}>
							<Icon name="user" fontSize="inherit" />
							<br />
							<p style={{ color: colors.secondary, fontFamily: "Open Sans" }}>
								{"200+"}
							</p>
						</Statistic.Value>
						<Statistic.Label style={{ color: colors.grey }}>
							Sportspersons
						</Statistic.Label>
					</Statistic>
				</Grid.Column>
			</Grid>
			{/* </Statistic.Group> */}
		</div>
	);
}
