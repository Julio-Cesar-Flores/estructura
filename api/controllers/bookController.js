import Book from "../models/Book.js";

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: "todos libros",
      book: newBook,
    });
  } catch (error) {
    return res.json({
      msg: "error al crear el libro",
    });
  }
};

const getAllBooks = (req, res) => {
  return res.json({ msg: "todos libros" });
};

const getBookById = (req, res) => {};
const updateBookById = (req, res) => {};
const deleteBookById = (req, res) => {};

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };
