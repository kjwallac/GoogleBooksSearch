import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import BookCard from "../components/BookCard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  results: {
    padding: 10,
  },
}));

export default function Search() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [books, setBooks] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function onSearch(criteria) {
    console.log(criteria);
    const searchResponse = await fetch(`/api/google/${criteria}`);
    const foundBooks = await searchResponse.json();
    console.log(foundBooks);
    setBooks(foundBooks);
  }

  return (
    <>
      <Jumbotron
        title="Search Google Books"
        subtitle="Search for Books of Interest"
      />
      
      <SearchBox searchHandler={onSearch} />
      
      <div className="results">
        {books.map((b) => (
          <BookCard book={b} />
        ))}
      </div>
    </>
  );
}
