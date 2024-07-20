const mongoose = require("mongoose");
const Document = require("./document");

mongoose
  .connect("mongodb://127.0.0.1:27017/docs")
  .then(() => console.log("Connected!"));

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
  socket.on("get-document", async (documentId) => {
    const doc = await findOrCreateDocument(documentId);
    //socket joins the room with given documentId
    socket.join(documentId);
    socket.emit("load-document", doc.data);
    socket.on("send-changes", (delta) => {
      //Below code broadcasts the message to everyone inside the provided documentId except us
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentId, { data });
    });
  });
});

const defaultValue = " ";

async function findOrCreateDocument(id) {
  if (id == null) return;

  const doc = await Document.findById(id);
  if (doc) return doc;
  return await Document.create({ _id: id, data: defaultValue });
}
