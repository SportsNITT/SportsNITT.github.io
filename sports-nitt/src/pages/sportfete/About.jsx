import React from "react";
import { Grid, Image } from "semantic-ui-react";
import content from "../../assets/content/sportsfete.json";
import logo from "../../assets/images/logo new.png";
import { colors } from "../../utils/colors";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function About() {
	return (
		<Grid
			stackable
			centered
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				marginTop: "10px",
				marginBottom: "10px",
			}}
		>
			<Grid.Column width={5} data-aos="fade-right" data-aos-duration="3000">
				<Image src={logo} />
			</Grid.Column>
			<Grid.Column width={11} data-aos="fade-left" data-aos-duration="3000">
				<p
					style={{
						textAlign: "left",
						fontSize: "24px",
						fontFamily: "Open Sans",
						wordWrap: "break-word",
						color: colors.grey,
					}}
				>
					{content.introduction}
				</p>
			</Grid.Column>
		</Grid>
	);
}
