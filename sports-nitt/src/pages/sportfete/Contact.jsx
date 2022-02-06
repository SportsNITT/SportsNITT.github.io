import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import { colors } from "../../utils/colors";

export default function Contact({ contact, links }) {
	return (
		<div style={{ marginTop: "10%", marginBottom: "10%" }}>
			<Grid stackable columns={2}>
				<Grid.Column
					style={{
						textAlign: "center",
					}}
				>
					<Segment
						style={{ backgroundColor: "#00000000" }}
						data-aos={"fade-right"}
						data-aos-duration="2000"
					>
						<h1
							style={{
								color: colors.secondary,
								fontSize: "2em",
								fontFamily: "Open Sans",
							}}
						>
							Contact
						</h1>
						<p
							style={{
								textAlign: "center",
								wordWrap: "break-word",
								color: colors.grey,
								fontSize: "1.5em",
								fontFamily: "Open Sans",
							}}
						>
							Sportsfete chairman - {contact.name} <br />
							Phone - {contact.contact} <br />
						</p>
					</Segment>
				</Grid.Column>
				<Grid.Column
					style={{
						textAlign: "center",
					}}
				>
					<Segment
						style={{ backgroundColor: "#00000000" }}
						data-aos={"fade-left"}
						data-aos-duration="2000"
					>
						<h1
							style={{
								color: colors.secondary,
								fontSize: "2em",
								fontFamily: "Open Sans",
							}}
						>
							follow Sportsfete
						</h1>
						<Button
							circular
							color="facebook"
							icon="facebook"
							href={links.facebook}
							target="_blank"
							size="large"
						/>
						<Button
							circular
							color="instagram"
							icon="instagram"
							href={links.instagram}
							target="_blank"
							size="large"
						/>
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
}
