const fetch = require("node-fetch");
const db = require("../models");

module.exports = {
  async find(req, res) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`
    );
    const books = [];
    const volumes = await response.json();
    for (const item of volumes.items ){
      const {title, authors, description, imageLinks, previewLink} = item.volumeInfo;
      const book = {
        title,
        authors,
        description,
        image: imageLinks && imageLinks.thumbnail,
        link: previewLink,
        googleId: item.id,
        saved: (await db.Book.findOne({googleId : item.id})) ? true : false,
      };
      books.push(book);
    } 
    res.json(books);
  },
};
