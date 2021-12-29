import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import NavbarMain from '../../components/Navbar';
import blogsData from '../../data/blogs.json';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost =blogsData["blogs"][0]; 

const featuredPosts =blogsData["featuredblogs"]; 
// console.log(featuredPosts)
// console.log(mainFeaturedPost)

const posts = blogsData["posts"];

const sidebar =  blogsData["sidebar"];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
    
      <Container maxWidth="lg" style={{ backgroundColor: "black" }}>
      <NavbarMain/>
        <Header title="Blog" social={sidebar.social} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Recent posts" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              categories={sidebar.categories}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}