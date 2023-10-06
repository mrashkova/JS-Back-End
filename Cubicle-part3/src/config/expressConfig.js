const express = require("express");
const path = require("path");

const expressConfig = (app) => {
  // Setup static files
  // const staticFiles = express.static(path.resolve(__dirname, 'public'));
  // app.use(staticFiles);
  app.use(express.static(path.resolve(__dirname, "../public")));
  app.use(express.urlencoded({ extended: false }));
};

module.exports = expressConfig;
