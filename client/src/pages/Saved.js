import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import BookCard from "../components/BookCard";
import { executeApiRequest } from "../utils/apiHelper";

export default function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadSavedBooks();
  }, []);

  async function loadSavedBooks() {
    setBooks((await executeApiRequest(`/api/books`)) || []);
  }

  return (
    <>
      <Jumbotron
        title="Saved Google Books"
        subtitle="Saved Books of Interest"
      />
      <div className="results">
        {books.map((b) => (
          <BookCard key={b.googleId} book={b} onRemove={loadSavedBooks} />
        ))}
      </div>
    </>
  );
}
