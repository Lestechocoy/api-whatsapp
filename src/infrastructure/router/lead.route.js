const express = require("express");
const { Router } = require("express");
const LeadCtrl = require("../controller/lead.ctrl");
const container = require("../ioc");
const router = Router();
const path = require("path"); // Importa el módulo 'path'

const leadCtrl = container.get("lead.ctrl");

const rutaImagenes = path.join(__dirname, 'img/qr.svg'); // Obtén la ruta completa

// Definición de la ruta GET para enviar el archivo QR
router.get("/", (req, res) => {
  // Envía el archivo SVG como respuesta a la solicitud GET
  res.sendFile(rutaImagenes);
});

// Ruta POST para enviar información
router.post("/", leadCtrl.sendCtrl);

module.exports = router;

