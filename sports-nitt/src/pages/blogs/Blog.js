import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import NavbarMain from '../../components/Navbar';
import Footer from '../../components/Footer';
import blogData from '../../assets/content/blogs.json';
import Box from '@mui/material/Box';

const mainFeaturedPost = blogData['mainFeaturedPost'];

const featuredPosts = blogData['featuredPosts'];

export default function Blog() {
	return (
		<div style={{ backgroundColor: 'black' }}>
			<NavbarMain />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					color: 'white',
					margin: 15,
				}}
			>
				<h1 style={{ fontSize: 50 }}>Blogs</h1>
			</div>

			<main style={{ margin: 5 }}>
				<MainFeaturedPost post={mainFeaturedPost} />

				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{featuredPosts.map((post) => (
							<Grid item xs={12} sm={6} md={4} key={post.id}>
								<FeaturedPost post={post} />
							</Grid>
						))}
					</Grid>
				</Box>
			</main>
			<br />
			<br />
			<Footer />
		</div>
	);
}
