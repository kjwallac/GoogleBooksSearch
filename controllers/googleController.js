const fetch = require("node-fetch");
const db = require("../models");

module.exports = {
  async find(req, res) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`
    );
    const volumes = await response.json();
    const books = volumes.items.map((i) => ({
      title: i.volumeInfo.title,
      authors: i.volumeInfo.authors,
      description: i.volumeInfo.description,
      image: i.volumeInfo.imageLinks.thumbnail,
      link: i.volumeInfo.previewLink,
      googleId: i.id,
    }));
    res.json(books);
  },
};
