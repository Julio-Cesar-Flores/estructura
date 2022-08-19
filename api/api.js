import express from "express";
import bookRoutes from "./routers/bookRoutes.js";
import clientRoutes from "./routers/clientRoutes.js";
import isAuth from "./middlewares/authValidator.js";
import authRoutes from "./routers/authRoutes.js";

const api = express();
api.use(express.json());
//api.set('env', 'production') // resultado json no válido

api.get("/status", (req, res) => {
  return res.json({
    msg: "API en línea y funcionando",
  });
});

api.use(authRoutes);
api.use("/books", isAuth, bookRoutes);
api.use(clientRoutes);

export default api;
