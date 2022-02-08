import React from 'react';
import ball from '../assets/images/404.gif';
import Footer from '../components/Footer';
import NavbarMain from '../components/Navbar';
import { colors } from '../utils/colors';

export default function FourOFour() {
	return (
		<div
			style={{
				textAlign: 'center',
				height: '100vh',
				scrollBehavior: 'smooth',
				backgroundColor: colors.primary,
			}}
		>
			<NavbarMain />
			<div
				style={{
					marginTop: '10%',
					marginBottom: '10%',
					// height: '70vh',
				}}
			>
				<img src={ball} width={320} alt='ball' />
			</div>
			<Footer />
		</div>
	);
}
