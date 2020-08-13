const handlers = require("./handlers");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    handlers.home(request, response);
  } else {
    handlers.missing(request, response);
  }
}

module.exports = router;
