import React from "react";
import { Link, useHistory } from "react-router-dom";
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

const Footer = () => {
	const navigate = useHistory();
	return (
		<footer
			style={{
				backgroundColor: colors.liteGrey,
				bottom: 0,
				margin: 0,
				width: "100%",
				// position: "sticky",
			}}
		>
			<Container
				style={{
					backgroundColor: colors.liteGrey,
					// marginBottom: 0,
					padding: "20px",
					// position: "fixed",
				}}
			>
				<Grid stackable columns={3}>
					<Grid.Column
						style={{
							textAlign: "center",
						}}
					>
						{/* <List
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
					</List> */}
						<h1
							style={{
								color: colors.secondary,
								fontSize: "1.5em",
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
								fontSize: "1.2em",
								fontFamily: "Open Sans",
							}}
						>
							Sports Secretary - Abhishek Shah <br />
							Phone - +91 70576 46485 <br />
							<br />
							Sports Complex
							<br />
							National Institute of Technology Tiruchirappalli - 620015 Tamil
							Nadu, INDIA
							<br />
							<a href="mailto:sports.nitt@gmail.com">
								sports.nitt@gmail.com
							</a>{" "}
						</p>
					</Grid.Column>
					<Grid.Column
						style={{
							textAlign: "center",
						}}
					>
						<div>
							<h1
								style={{
									color: colors.secondary,
									fontSize: "1.5em",
									fontFamily: "Open Sans",
								}}
							>
								Quick links
							</h1>

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
									onClick={() => navigate.push("/")}
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
									onClick={() => navigate.push("/achievements")}
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
									onClick={() => navigate.push("/blogs")}
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
									onClick={() => navigate.push("/teams")}
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
									onClick={() => navigate.push("/sportsfete")}
								>
									Sportsfete
								</List.Item>
							</List>
						</div>
					</Grid.Column>
					<Grid.Column
						style={{
							textAlign: "center",
						}}
					>
						<div
						// style={{
						// 	textAlign: "center",
						// }}
						>
							<h1
								style={{
									color: colors.secondary,
									fontSize: "1.5em",
									fontFamily: "Open Sans",
								}}
							>
								follow us
							</h1>
							<Button
								circular
								color="facebook"
								icon="facebook"
								href="https://m.facebook.com/SportsNITT/"
								target="_blank"
							/>
							<Button
								circular
								color="instagram"
								icon="instagram"
								href="https://www.instagram.com/sportscouncil.nitt/"
								target="_blank"
							/>
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
		</footer>
	);
};

export default Footer;
