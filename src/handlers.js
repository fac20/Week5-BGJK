const fs = require("fs");
const path = require("path");
const model = require("./model");

//-------Home Handler------------------
function home(request, response) {
  const filePath = path.join(__dirname, "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.error(error);
      response.writeHead(200, { "content-type": "text/html" });
      response.end(`<h1>Not Found</h1>`);
    } else {
      response.writeHead(200, { "content-type": "text/html" });
      response.end(file);
    }
  });
}

// --------Missing handler---------------
function missing(response, request) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end(`<h1>Oops, nothing for you over here</h1>`);
}

module.exports = { home, missing };
