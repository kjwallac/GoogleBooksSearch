import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import BookCard from "../components/BookCard";
import { executeApiRequest } from "../utils/apiHelper";

export default function Search() {
  const [books, setBooks] = React.useState([]);

  async function onSearch(criteria) {
    setBooks((await executeApiRequest(`/api/google/${criteria}`)) || []);
  }
  function onSaved(book) {
    book.saved = true;
    setBooks([...books]);
  }

  function onRemove(book) {
    book.saved = false;
    setBooks([...books]);
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
          <BookCard
            key={b.googleId}
            book={b}
            onSaved={onSaved}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
}
