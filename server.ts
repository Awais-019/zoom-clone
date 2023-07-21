import express from "express";
import http from "http";
import { v4 } from "uuid";

const app = express();

const server = http.createServer(app);

const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect(`/${v4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(3000);
