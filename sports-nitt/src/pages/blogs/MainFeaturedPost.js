import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Modal, Box, Grid, Link, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	mainFeaturedPost: {
		position: 'relative',
		color: theme.palette.common.white,
		marginBottom: theme.spacing(6),
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		fontFamily: 'tahoma',
		borderRadius: 10,
		padding: 15,
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
}));
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	borderRadius: 5,
	fontFamily: 'tahoma',
	p: 4,
};

export default function MainFeaturedPost(props) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const classes = useStyles();
	const { post } = props;

	return (
		<Paper
			className={classes.mainFeaturedPost}
			style={{ backgroundImage: `url(${post.image})` }}
		>
			{/* Increase the priority of the hero background image */}
			{
				<img
					style={{ display: 'none' }}
					src={post.image}
					alt={post.imageText}
				/>
			}
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography
							component='h2'
							variant='h4'
							color='inherit'
							gutterBottom
						>
							{post.title}
						</Typography>
						<Typography variant='p' color='inherit' paragraph>
							{post.description}
						</Typography>
						{post.link != '' ? (
							<Link variant='subtitle1' href={post.link}>
								{post.linkText}
							</Link>
						) : (
							<Button onClick={handleOpen}> {post.linkText}</Button>
						)}
						<Modal
							open={open}
							onClose={handleClose}
							aria-labelledby='modal-modal-title'
							aria-describedby='modal-modal-description'
						>
							<Box sx={style}>
								<Typography id='modal-modal-title' variant='h6' component='h2'>
									{post.title}
								</Typography>
								<Typography id='modal-modal-description' sx={{ mt: 2 }}>
									{post.description}
								</Typography>
							</Box>
						</Modal>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}

MainFeaturedPost.propTypes = {
	post: PropTypes.object,
};
