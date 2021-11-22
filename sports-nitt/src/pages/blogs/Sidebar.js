import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    marginTop:10,

  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

function Sidebar({ categories, description, title }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4}>
     
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Categories
      </Typography>
      {categories.map((category) => (
        <Link display="block" variant="body1" href={category.url} key={category.title}>
          {category.title}
        </Link>
      ))}
    
      <Paper elevation={2} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </Paper>
    </Grid>
  );
}

export default Sidebar;