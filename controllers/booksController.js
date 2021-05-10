const db = require("../models");
const notifier = require("../notifier");

async function executeDbOp(operation, res) {
  try {
    const returnValue = await operation();
    res.json(returnValue);
  } catch (err) {
    res.status(422).json(err);
    console.log(err);
  }
}

module.exports = {
  async findAll(req, res) {
    await executeDbOp(async () => {
      const books = await db.Book.find(req.query);
      return books.map(book => ({...book.toObject(), saved: true}));
    }, res);
  },
  async findByGoogleId(req, res) {
    await executeDbOp(
      async () => await db.Book.findOne({ googleId: req.params.id }),
      res
    );
  },
  async create(req, res) {
    await executeDbOp(async () => await db.Book.create(req.body), res);
    notifier.sendNotification(`${req.body.title} has been added to the library.`);
  },
  async remove(req, res) {
    await executeDbOp(async () => {
      const book = await db.Book.findOne({ googleId: req.params.id });
      await book.remove();
      return book;
    }, res);
  },
};
