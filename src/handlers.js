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
function missing(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end(`<h1>Oops, nothing for you over here</h1>`);
}

// --------Create User Handler---------------
function createUser(request, response) {
  let body = "";
  request.on("data", chunk => (body += chunk));
  request.on("end", () => {
    const searchParams = new URLSearchParams(body);
    // console.log(searchParams);
    const data = Object.fromEntries(searchParams);
    // console.log(data);
    model
      .createUsers(data)
      .then(() => {
        response.writeHead(302, { location: "/" });
        response.end();
      })
      .catch(error => {
        console.error(error);
        response.writeHead(500, { "content-type": "text/html" });
        response.end(`<h1>No connection no beans</h1>`);
      });
  });
}
module.exports = { home, missing, createUser };
