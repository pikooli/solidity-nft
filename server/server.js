const express = require("express");
const http = require("http");
const next = require("next");

const app = express();
const server = http.createServer(app);
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handler = nextApp.getRequestHandler();
const port = process.env.PORT || 80;

nextApp.prepare().then(() => {
  app.all("*", (req, res) => {
    return handler(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port: ${port}`);
  });
});
