import { Router } from "express";
import * as bookController from "../controllers/bookController.js";
const router = Router();

router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

router
  .route("/books/:id")
  .get(bookController.getBookById)
  .put(bookController.getBookById)
  .delete(bookController.deleteBookById);

export default router;
