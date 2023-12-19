const fs = require("fs");
const express = require("express");
const { Router } = require("express");
const router = Router();

const PATH_ROUTES = __dirname;

function removeExtension(fileName) {
  const cleanFileName = fileName.split(".").shift();
  return cleanFileName;
}

function loadRouter(file) {
  const name = removeExtension(file);
  if (name !== "index") {
    const routerModule = require(`./${file}`);
    console.log("cargado", name);
    router.use(`/${name}`, routerModule);
  }
}

fs.readdirSync(PATH_ROUTES).forEach((file) => loadRouter(file));

module.exports = router;
