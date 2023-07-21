import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

server.listen(3000);
