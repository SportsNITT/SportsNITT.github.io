import React from "react";
import ReactPlayer from "react-player";
import { colors } from "../../utils/colors";

export default function Video({ utube, title }) {
	return (
		<div style={{ marginBottom: "5%", marginTop: "20px" }}>
			<h1
				style={{
					textAlign: "center",
					color: colors.secondary,
				}}
			>
				{title}
			</h1>
			<ReactPlayer
				url={utube}
				playing={true}
				muted
				width={"100%"}
				height={window.innerWidth <= 480 ? "360px" : "600px"}
				controls={true}
			/>
		</div>
	);
}
