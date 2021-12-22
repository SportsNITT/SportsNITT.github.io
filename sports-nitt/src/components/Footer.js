import React from "react";
import {
	Grid,
	Container,
	Divider,
	List,
	Button,
	Icon,
} from "semantic-ui-react";
import { colors } from "../utils/colors";
import "./Footer.css";

const Footer = () => (
	<Container
		fluid
		style={{
			backgroundColor: colors.liteGrey,
			marginBottom: 0,
			height: "100vh",
		}}
	>
		<Container
			style={{
				backgroundColor: colors.liteGrey,
				marginBottom: 0,
				height: "100vh",
			}}
		>
			<Grid stackable columns={3}>
				<Grid.Column>
					<List
						style={{
							textAlign: "center",
						}}
					>
						<List.Item icon="users" content="Semantic UI" />
						<List.Item icon="marker" content="New York, NY" />
						<List.Item
							icon="mail"
							content={
								<a href="mailto:sports.nitt@gmail.com">sports.nitt@gmail.com</a>
							}
						/>
						{/* <List.Item
							icon="linkify"
							content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
						/> */}
					</List>
				</Grid.Column>
				<Grid.Column>
					<List
						link
						style={{
							textAlign: "center",
						}}
					>
						<List.Item
							as="a"
							style={{
								color: colors.grey,
								fontSize: "1.2em",
								fontFamily: "Open Sans",
							}}
						>
							Home
						</List.Item>
						<List.Item
							as="a"
							style={{
								color: colors.grey,
								fontSize: "1.2em",
								fontFamily: "Open Sans",
							}}
						>
							Achievements
						</List.Item>
						<List.Item
							as="a"
							style={{
								color: colors.grey,
								fontSize: "1.2em",
								fontFamily: "Open Sans",
							}}
						>
							Blogs
						</List.Item>
						<List.Item
							as="a"
							style={{
								color: colors.grey,
								fontSize: "1.2em",
								fontFamily: "Open Sans",
							}}
						>
							teams
						</List.Item>
						<List.Item
							as="a"
							style={{
								color: colors.grey,
								fontSize: "1.2em",
								fontFamily: "Open Sans",
							}}
						>
							Sportsfete
						</List.Item>
					</List>
				</Grid.Column>
				<Grid.Column
					style={{
						textAlign: "center",
					}}
				>
					<div>
						<Button circular color="facebook" icon="facebook" />
						<Button circular color="twitter" icon="twitter" />
						<Button circular color="linkedin" icon="linkedin" />
						<Button circular color="youtube" icon="youtube" />
						<Button circular color="instagram" icon="instagram" />
					</div>
				</Grid.Column>
			</Grid>
			<Divider />
			<p
				style={{
					color: colors.grey,
					fontSize: "1em",
					fontFamily: "Open Sans",
					textAlign: "center",
					paddingBottom: "10px",
				}}
			>
				NIT Trichy Sports Contigent. All rights reserved
			</p>
		</Container>
	</Container>
);

export default Footer;
