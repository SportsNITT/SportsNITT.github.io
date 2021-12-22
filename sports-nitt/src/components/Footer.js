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
				<Button color="facebook">
					<Icon name="facebook" />
				</Button>
				<Button color="twitter">
					<Icon name="twitter" />
				</Button>
				<Button color="linkedin">
					<Icon name="linkedin" />
				</Button>
				<Button color="instagram">
					<Icon name="instagram" />
				</Button>
				<Button color="youtube">
					<Icon name="youtube" />
				</Button>
			</Grid.Column>
		</Grid>
		<Divider />
		<div>copyrights</div>
	</Container>
);

export default Footer;
