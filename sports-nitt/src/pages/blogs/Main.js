import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
  markdown: {
    margin:10,
    backgroundColor:"#EAEDED",
    borderRadius:5,
    padding: 10,
    color:"white",
    textDecoration:"none",
    
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <h3>
        {title}
      </h3>
      <hr />
      {posts.map((post) => (
          <div className={classes.markdown}>
         <Link  key={post.id}>
          {post.desc}
         </Link>
        </div>
       
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};