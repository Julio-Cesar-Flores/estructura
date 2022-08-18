import http from "http"; //http es nativo de node
import api from "./api/api.js";
import database from "./api/config/database.js";
import config from "./api/config/index.js";

const port = config.server.port;
//Aqui ponemos la instancia de express
const server = http.createServer(api);

server.listen(port);
database();

server.on("listening", () => {
  console.log(`Servidor escuchando ${port} 🎪`);
});

server.on("error", (error) => {
  console.log(`Servidor escuchando 🧧 ${error.code}`);
});

//console.log(process.env)