const http = require("http");
// const rupiah = require("rupiah-format");
const host = "localhost";
const port = 3002;

const server = http.createServer(function (request, response) {
  const nama = "Lazzghi";
  const money = 1000000000;
  const jajan = 100000000;
  const total = money - jajan;

  const hasil = `<p> halo nama saya ${nama}, saya jajan sebanyak ${jajan}, saya punya uang sebanyak ${money}, saya mempunyai sisa uang ${total} </p>`;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`Server running at http://${host}:${port}/`);
});
