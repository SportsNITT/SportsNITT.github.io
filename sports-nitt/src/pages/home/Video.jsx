import React from "react";
import { Embed } from "semantic-ui-react";
import ReactPlayer from "react-player";

export default function Video() {
	return (
		<div style={{ marginBottom: "20px", marginTop: "20px", width: "100%" }}>
			{/* <video width="100%" controls autoPlay muted>
				<source src="https://www.youtube.com/watch?v=8WsdpFDGvIg" />
			</video> */}
			<ReactPlayer
				url="https://www.youtube.com/watch?v=8WsdpFDGvIg"
				playing={true}
				muted
				width={"100%"}
				controls={true}
			/>
		</div>
	);
}
