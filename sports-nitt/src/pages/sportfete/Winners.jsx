import React from "react";
import { Grid, Icon, Statistic } from "semantic-ui-react";
import { colors } from "../../utils/colors";

export default function Winners({ data }) {
	return (
		<div style={{ marginBottom: "5%", marginTop: "5%" }}>
			<Grid stackable columns={3} style={{ textAlign: "center" }}>
				<Grid.Column style={{ textAlign: "center" }}>
					<Statistic>
						<Statistic.Value style={{ color: "#d4af37" }}>
							<Icon name="winner" fontSize="inherit" />
							<br />
						</Statistic.Value>
						<p
							style={{
								color: colors.grey,
								fontFamily: "Open Sans",
								fontSize: "1.2em",
							}}
						>
							{"Winner"}
						</p>
						<p
							style={{
								color: colors.secondary,
								fontFamily: "Open Sans",
								fontSize: "1.3em",
								textAlign: "center",
							}}
						>
							{data[0]}
						</p>
					</Statistic>
				</Grid.Column>
				<Grid.Column style={{ textAlign: "center" }}>
					<Statistic>
						<Statistic.Value style={{ color: "#c0c0c0" }}>
							<Icon name="winner" fontSize="inherit" />
							<br />
						</Statistic.Value>
						<p
							style={{
								color: colors.grey,
								fontFamily: "Open Sans",
								fontSize: "1.2em",
							}}
						>
							{"Runner"}
						</p>
						<p
							style={{
								color: colors.secondary,
								fontFamily: "Open Sans",
								fontSize: "1.3em",
								textAlign: "center",
							}}
						>
							{data[1]}
						</p>
					</Statistic>
				</Grid.Column>
				<Grid.Column style={{ textAlign: "center" }}>
					<Statistic>
						<Statistic.Value style={{ color: "#CD7F32" }}>
							<Icon name="winner" fontSize="inherit" />
							<br />
						</Statistic.Value>
						<p
							style={{
								color: colors.grey,
								fontFamily: "Open Sans",
								fontSize: "1.2em",
							}}
						>
							{"2nd Runner"}
						</p>
						<p
							style={{
								color: colors.secondary,
								fontFamily: "Open Sans",
								fontSize: "1.3em",
								textAlign: "center",
							}}
						>
							{data[2]}
						</p>
					</Statistic>
				</Grid.Column>
			</Grid>
		</div>
	);
}
