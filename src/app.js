require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./infrastructure/router");

const port = process.env.PORT || 3005;
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

// app.get('/load-html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'qr.html'));
// });

// app.get('/load-svg', (req, res) => {
//   res.sendFile(path.join(__dirname, '../tmp/qr.svg'));
// });

app.use(`/whatsapp`, routes);

app.listen(port, () => console.log(`Ready...${port}`));
