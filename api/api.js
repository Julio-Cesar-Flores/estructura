import express from "express";
import bookRoutes from "./routers/bookRoutes.js";

const api = express();
api.use(express.json());

api.get("/status", (req, res) => {
  return res.json({
    msg: "API en línea y funcionando",
  });
});

api.use(bookRoutes);

export default api;
