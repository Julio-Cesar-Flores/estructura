import http from "http"; //http es nativo de node
import api from "./api/api.js";

const port = 3000;
//Aqui ponemos la instancia de express
const server = http.createServer(api);  

server.listen(port);

server.on("listening", () => {
  console.log(`Servidor escuchando ${port} 🎪`);
});

server.on("error", (error) => {
  console.log(`Servidor escuchando 🧧 ${error.code}`);
});
