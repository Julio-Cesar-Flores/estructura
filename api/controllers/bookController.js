import Book from "../models/Book.js";

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: "libro creado",
      book: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "error al crear el libro",
      error,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.json({
      msg: "Libros encontrados",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar libros",
      error,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      msg: "Libro encontrado",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar libro por id",
      error,
    });
  }
};
const updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    //const book = await Book.updateOne({ _id: id }, req.body);
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Libro actualizado",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar el libro por id",
      error,
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({
        msg: "No existe el libro",
      });
    }
    return res.json({
      msg: "Libro borrado",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar el libro por id",
      error,
    });
  }
};

export { getAllBooks, createBook, getBookById, updateBookById, deleteBookById };
