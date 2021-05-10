import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
