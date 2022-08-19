import { Router } from "express";
import * as clientController from "../controllers/clientController.js";
import createClientValidator from "../middlewares/createClientValidator.js";

const router = Router();

router
  .route("/clients")
  .get(clientController.getAllClients)
  .post(createClientValidator, clientController.createClient);

router
  .route("/clients/:id")
  .get(clientController.getClientById)
  .put(clientController.updateClientById)
  .delete(clientController.deleteClientById);

export default router;
