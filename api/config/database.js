import mongoose from "mongoose";

const db = mongoose.connection;

db.on("connecting", () => {
  console.log("conectando <🎇");
});
db.on("connected", () => {
  console.log("ok db conectado <😊");
});
db.on("error", () => {
  console.log("Error conexion <🎃");
});

/*
mongoose.connect("mongodb://localhost/library", async () => {
  try {
    //await getAllRestaurants();
  } catch (err) {
    console.error("error :(" + err);
  }
  console.log("Después de mongoose conectado");
});*/

export default () => {
  mongoose.connect("mongodb://localhost/library");
};
