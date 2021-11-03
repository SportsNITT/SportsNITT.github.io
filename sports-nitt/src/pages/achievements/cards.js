import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import achievements from '../../data/achievements.json';
import '../achievements/cards.css';
const achvms= achievements.achievements;


export default function ResponsiveGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {achvms.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Card sx={{ maxWidth: 345 }}  className="card">
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image={item.src}
            alt={item.altText}
            style={{"padding":10}}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            {item.desc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {item.content}
                </Typography>
            
            </CardContent>
        </CardActionArea>
        </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
