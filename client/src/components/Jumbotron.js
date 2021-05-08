import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default function Jumbotron({ title, subtitle }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
    <Card variant="outlined">
      <CardContent>
        <Typography className={classes.title} variant="h4" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} variant="h6" color="textSecondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
