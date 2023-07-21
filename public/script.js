const socket = io("/");
const mypeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});

mypeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

socket.on("user-connected", (userId) => {
  console.log("User connected: " + userId);
});
