//io object allows us to do our connections and here we are connecting server with the client
//3001 is the URL of server
//3000 is the URL of client
const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000", //this allows client to access server or vice versa
    methods: ["GET", "POST"], //these are the methods that will be allowed during cors
  },
});

//through socket we will communicate back to client
io.on("connection", (socket) => {
  socket.on("send-changes", (delta) => {
    console.log(delta);
    // socket.broadcast.emit("receive-changes", delta);
  });
});
