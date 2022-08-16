import http from "http"; //http es nativo de node
const port = 3000;
const server = http.createServer();

server.listen(port);

server.on("listening", () => {
  console.log(`Servidor escuchando ${port} 🎪`);
});

server.on("error", (error) => {
  console.log(`Servidor escuchando 🧧 ${error.code}`);
});
