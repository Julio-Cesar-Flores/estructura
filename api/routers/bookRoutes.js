import { Router } from "express";
import * as bookController from "../controllers/bookController.js";
import isAuth from "../middlewares/authValidator.js";
import createBookValidator from "../middlewares/createBookValidator.js";

const router = Router();

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(createBookValidator, bookController.createBook);

router
  .route("/:id")
  .get(bookController.getBookById)
  .put(bookController.updateBookById)
  .delete(bookController.deleteBookById);

export default router;
