import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 250,
    height:270,
  },
});

export default function EventCard({service}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.card} style={{background:"indianred"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="Service"
          height='200'
          image={service.img}
          title="Contemplative Reptile"
        />
        <CardContent style={{color:'white'}}>
          <Typography gutterBottom >
            {service.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}