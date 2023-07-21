import express from "express";
import http from "http";
import { Socket } from "socket.io";
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

io.on("connection", (socket: Socket) => {
  socket.on("join-room", (roomId: string, userId: string) => {
    console.log(roomId, userId);
  });
});

server.listen(3000);
