import mongoose from "mongoose";

const schema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: String,
  genre: String,
  category: String,
  editorial: String,
  language: String,
  printingDate: Date,
  pages: Number,
  isbn: String,
  coverage: String,
});

export default mongoose.model("Book", schema);
