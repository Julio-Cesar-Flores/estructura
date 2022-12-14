import mongoose from "mongoose";
import config from "./index.js";

const db = mongoose.connection;

db.on("connecting", () => {
  console.log("conectando <๐");
});
db.on("connected", () => {
  console.log("ok db conectado <๐");
});
db.on("error", () => {
  console.log("Error conexion <๐");
});

/*
mongoose.connect("mongodb://localhost/library", async () => {
  try {
    //await getAllRestaurants();
  } catch (err) {
    console.error("error :(" + err);
  }
  console.log("Despuรฉs de mongoose conectado");
});*/

export default () => {
  /*
  if testing conect to an other database or memory db
  */
  mongoose.connect(config.database.uri);
};
