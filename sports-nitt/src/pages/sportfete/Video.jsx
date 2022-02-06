import React from "react";
import ReactPlayer from "react-player";
import { colors } from "../../utils/colors";
import Winners from "./Winners";

export default function Video({ utube, title, data }) {
	return (
		<div style={{ marginBottom: "10%", marginTop: "5%" }}>
			<h1
				style={{
					textAlign: "center",
					color: colors.secondary,
				}}
			>
				{title}
			</h1>
			<Winners data={data} />
			<ReactPlayer
				url={utube}
				playing={false}
				muted
				width={"100%"}
				height={window.innerWidth <= 480 ? "360px" : "600px"}
				controls={true}
			/>
		</div>
	);
}
