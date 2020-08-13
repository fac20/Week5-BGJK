const fs = require("fs");
const path = require("path");
const model = require("./model");

// -------Home Handler------------------
function home(request, response) {
  const filePath = path.join(__dirname, "..", "public", "index.html");
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
function missing(request, response) {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>Oops, nothing for you over here</h1>");
}

// --------Public handler----------------
const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
};

function public(request, response) {
  const url = request.url;
  const urlArray = url.split(".");
  const extension = urlArray[urlArray.length - 1];
  const type = types[extension];

  const filePath = path.join(__dirname, "..", url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

module.exports = { home, missing, public };
