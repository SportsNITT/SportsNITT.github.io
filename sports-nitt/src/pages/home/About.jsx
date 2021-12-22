import React from "react";
import { Image, Grid } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";

export default function About() {
	return (
		<Grid centered>
			<Grid.Column width={6}>
				<Image src={logo} />
			</Grid.Column>
			<Grid.Column width={10}>
				<p
					style={{
						textAlign: "left",
						color: "white",
						fontSize: "24px",
					}}
				>
					Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
					alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
					referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
					electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
					Mei ex natum rebum iisque. Eu quo homero blandit intellegebat.
					Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no
					illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico
					facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum
					elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas
					minimum postulant per id.
				</p>
			</Grid.Column>
		</Grid>
	);
}
