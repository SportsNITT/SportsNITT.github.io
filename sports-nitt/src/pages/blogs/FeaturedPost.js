import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {CardMedia, Box,Card, CardContent, Link, Button, Modal} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    margin:10,
    maxHeight:"30vh"
  },
 
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:5,
  fontFamily:'tahoma',
  p: 4,
};

export default function FeaturedPost(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const { post } = props;

  var showStr= "";
  const arr= post.desc.split(" ");
  for(var i=0; i<5; i++){
    showStr+=" " +arr[i]
  }

  return (
<>
<Card className={classes.card}>
          <div></div>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
          {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" style={{marginBottom:8}}>
          {post.date}
          </Typography>
          <Typography variant='p' color= "text.primary" component="p">
          {showStr}
          </Typography>
          <Typography>
            {(post.link!="")?  
            <Typography component="a" href={post.link}>
             {post.linkText}
            </Typography> : 
          (  <Typography onClick={handleOpen}>
             {post.linkText}
            </Typography>)
            }
          </Typography>
          
        </CardContent>
       
      </Box>
            <CardMedia
              component="img"
             style={{maxHeight:"30vh", padding:4, margin:7, borderRadius:10}}
              image={post.imgsrc}
              alt="Paella dish"
            />
            
        </Card>
         <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h5" component="h2" style={{paddingBottom:5}}>
           {post.title}
           </Typography>
  
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {post.desc}
           </Typography>
         </Box>
       </Modal>
</>
        
      
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};