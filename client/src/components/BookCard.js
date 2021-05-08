import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  button: {
    float: "right",
  },
  root: {
    flexGrow: 1,
    minWidth: 275,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10,
  },
  description: {
    textAlign: "left",
    marginLeft: 10,
    verticalAlign: "middle",
  },
  author: {
    textAlign: "left",
    marginLeft: 10,
  },
  image: {
    padding: 10,
    verticalAlign: "middle",
  },
  buttonRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function BookCard({ book }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography className={classes.title} variant="h4">
              {book.title}
            </Typography>
          </Grid>
          <Grid className={classes.buttonRoot} item xs={2}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button href={book.link}>View</Button>
              <Button>Save</Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.author}>
              Written by: {book.authors}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={book.image} className={classes.image} />
          </Grid>
          <Grid item xs={10}>
            <Typography className={classes.description}>
              {book.description}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
