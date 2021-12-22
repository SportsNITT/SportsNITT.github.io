import React from "react";
import {
	Grid,
	Container,
	Divider,
	List,
	Button,
	Icon,
} from "semantic-ui-react";
import "./Footer.css";

const Footer = () => (
	<Container fluid className="footer-container">
		<Grid stackable columns={3} centered>
			<Grid.Column>
				<List>
					<List.Item icon="users" content="Semantic UI" />
					<List.Item icon="marker" content="New York, NY" />
					<List.Item
						icon="mail"
						content={
							<a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
						}
					/>
					<List.Item
						icon="linkify"
						content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
					/>
				</List>
			</Grid.Column>
			<Grid.Column>
				<List link>
					<List.Item active>Home</List.Item>
					<List.Item as="a">About</List.Item>
					<List.Item as="a">Jobs</List.Item>
					<List.Item as="a">Team</List.Item>
				</List>
			</Grid.Column>
			<Grid.Column>
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
		<div>copyrights</div>
	</Container>
);

export default Footer;
