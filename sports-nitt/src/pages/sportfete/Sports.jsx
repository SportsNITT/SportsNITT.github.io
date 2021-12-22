import React from "react";
import { List, Grid, Segment, Divider } from "semantic-ui-react";
import { colors } from "../../utils/colors";

export default function Sports({ data }) {
	return (
		<>
			<h1
				style={{
					textAlign: "center",
					color: colors.secondary,
				}}
			>
				Sports
			</h1>
			<Segment
				style={{
					textAlign: "center",
				}}
			>
				<Grid stackable columns={3}>
					{data.map((item, i) => (
						<Grid.Column>
							<List animated verticalAlign="middle">
								<List.Item>
									<List.Content>
										<List.Header
											style={{
												color: colors.liteGrey,
											}}
										>
											{item}
										</List.Header>
									</List.Content>
								</List.Item>
							</List>
						</Grid.Column>
					))}
				</Grid>
			</Segment>
		</>
	);
}
