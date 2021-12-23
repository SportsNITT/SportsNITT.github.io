import React from "react";
import { Grid } from "semantic-ui-react";
import { colors } from "../../utils/colors";

export default function About() {
	return (
		<div style={{ marginTop: "20px", marginBottom: "20px" }}>
			<Grid centered>
				<Grid.Column width={12}>
					<h1
						style={{
							textAlign: "center",
							color: colors.secondary,
							fontSize: "2em",
							fontFamily: "Open Sans",
						}}
					>
						Welcome to Sports Council
					</h1>
					<p
						style={{
							textAlign: "center",
							color: colors.grey,
							fontSize: "1.5em",
							fontFamily: "Open Sans",
						}}
					>
						Here at the NIT Trichy Sports Council, we envision a campus united
						by the values taught to us by sports - integrity, teamwork, and
						commitment. We strive to create an environment within the campus
						where sports can thrive and form an integral part of the lives of
						all those who reside at NIT Trichy, students and staff alike. The
						council organizes multiple events throughout the year, encouraging
						all those passionate about the sport they love. We also engage with
						the members of the campus who partake in these events and aim to
						facilitate their endeavors in the best possible manner.
					</p>
				</Grid.Column>
			</Grid>
		</div>
	);
}
