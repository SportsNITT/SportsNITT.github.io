import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import achievements from '../../data/achievements.json';
import '../achievements/cards.css';
import { Container } from '@material-ui/core';
const achvms = achievements.achievements;


export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        {achvms.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card className="card" style={{ backgroundColor: "#2C2C2C", color: "whitesmoke" }}>
              <div style={{ margin: 10 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.src}
                  alt={item.altText}
                  style={{ "padding": 10 }}
                />
                <CardContent >
                  <h3 style={{ fontWeight: 600, color: "#ff8b00" }}>
                    {item.title}
                  </h3>
                  <p>
                    {item.desc}
                  </p>
                  <p>
                    {item.content}
                  </p>

                </CardContent>
              </div>


            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
