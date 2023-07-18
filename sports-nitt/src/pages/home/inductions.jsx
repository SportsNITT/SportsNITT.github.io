import React from "react";
import { useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { Button } from "semantic-ui-react";
import { colors } from "../../utils/colors";

export default function Inductions({ utube }) {
    const navigate = useHistory();
	return (
		<div 
            style={{ 
                textAlign: "center",
                marginBottom: "10%", 
                marginTop: "5%" 
            }}
        >
			<ReactPlayer
				url={utube}
				playing={false}
				muted
				width={"100%"}
				height={window.innerWidth <= 480 ? "360px" : "600px"}
				controls={true}
			/>
            <br/>
            <p
				style={{
					textAlign: "center",
					wordWrap: "break-word",
					color: colors.grey,
					fontSize: "1.2em",
					fontFamily: "Open Sans",
				}}
			>
			    Inductions'23-24,    Coming soon
                <br/>
                Follow our social media for instant updates.
			</p>
            <Button inverted onClick={() => navigate.push("/teams")}>
                Learn more
            </Button>
		</div>

	);
}
