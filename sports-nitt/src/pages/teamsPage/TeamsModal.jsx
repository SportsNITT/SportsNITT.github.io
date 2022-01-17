import React from "react";
import { Button, Grid, Image, Modal } from "semantic-ui-react";
import { colors } from "../../utils/colors";

const CAPTAINS_IMG_URL =
	"https://raw.githubusercontent.com/SportsNITT/SportsNITT.github.io/main/images/Captains%20Photos/";

export default function TeamsModal({ open, setOpen, trigger, team }) {
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			// trigger={trigger}
			dimmer="blurring"
			size="small"
			style={{
				padding: "auto",
				height: "auto",
				top: "50%",
				left: "50%",
				transform: "translate(-50%,-50%)",
			}}
		>
			<Modal.Header
				style={{
					fontFamily: "Open Sans",
				}}
			>
				{team.teamName} - Captain(s)
			</Modal.Header>
			<Modal.Content image scrolling>
				<Grid stackable columns={2} centered>
					{team.capImgUrls.map((capImg, i) => (
						<Grid.Column key={i}>
							<Image
								src={`${CAPTAINS_IMG_URL}${capImg}`}
								width="100%"
								centered
							/>
							<p
								style={{
									textAlign: "center",
									fontFamily: "Open Sans",
									color: colors.liteGrey,
									fontWeight: "bold",
									fontSize: "1.2em",
								}}
							>
								{team.captainNames[i]}
							</p>
						</Grid.Column>
					))}
				</Grid>
			</Modal.Content>
			<Modal.Actions>
				<Button color="black" onClick={() => setOpen(false)}>
					Close
				</Button>
			</Modal.Actions>
		</Modal>
	);
}
