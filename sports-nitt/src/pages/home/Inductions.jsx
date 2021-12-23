import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import content from "../../assets/content/sportsfete.json";
import sportsfetelogo from "../../assets/images/sportsfete-logo-alone.png";
import { colors } from "../../utils/colors";

export default function Inductions() {
	const navigate = useHistory();
	return (
		<div
			style={{
				textAlign: "center",
				marginTop: "20px",
				marginBottom: "20px",
			}}
		>
			<img alt={content.inductions_title} src={sportsfetelogo} width="70%" />
			<h1
				style={{
					textAlign: "center",
					wordWrap: "break-word",
					color: colors.secondary,
					fontSize: "2em",
					fontFamily: "Open Sans",
				}}
			>
				{content.inductions_title}
			</h1>
			<p
				style={{
					textAlign: "center",
					wordWrap: "break-word",
					color: colors.grey,
					fontSize: "1.2em",
					fontFamily: "Open Sans",
				}}
			>
				{content.inductions_description}
			</p>
			<Button inverted onClick={() => navigate.push("/sportsfete")}>
				Learn more
			</Button>
		</div>
	);
}
