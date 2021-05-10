import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { executeApiRequest } from "../utils/apiHelper";

const useStyles = makeStyles((theme) => ({
  button: {
    float: "right",
  },
  root: {
    flexGrow: 1,
    minWidth: 275,
    padding: 10,
    margin: 10,
    boxShadow: '1px 3px 5px 2px rgba(100, 100, 100, .5)',
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
    textAlign: "justify",
    marginLeft: 10,
    padding: 10,
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
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // padding: 10,
    // "& > *": {
    //   margin: theme.spacing(1),
    // },
    textAlign: "right",
  },
}));

export default function BookCard({ book, onRemove, onSaved }) {
  const classes = useStyles();
  async function saveBook() {
    await executeApiRequest("/api/books", "POST", book);
    onSaved(book);
  }
  async function removeBook() {
    await executeApiRequest(`/api/books/${book.googleId}`, "DELETE");
    onRemove(book);
  }

  return (
    <div className={classes.root}>
      
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Typography className={classes.title} variant="h4">
              {book.title}
            </Typography>
          </Grid>
          <Grid className={classes.buttonRoot} item xs={3}>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button href={book.link}>View</Button>
              {!book.saved && <Button onClick={saveBook}>Save</Button>}
              {book.saved && <Button onClick={removeBook}>Remove</Button>}
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.author}>
              Written by: {book.authors}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <img src={book.image} alt={book.title} className={classes.image} />
          </Grid>
          <Grid item xs={10}>
            <Typography className={classes.description}>
              {book.description}
            </Typography>
          </Grid>
        </Grid>
      
    </div>
  );
}
