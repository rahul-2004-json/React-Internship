import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

/*
wrapperRef is a callback function created with useCallback.
It takes wrapper (a DOM element) as an argument.
If wrapper is null, the function exits.
Clears wrapper's content with wrapper.innerHTML = "".
Creates a new div for the Quill editor.
Appends this new div to wrapper.
Initializes a Quill editor in the new div with the "snow" theme.

*/

const SAVE_INTERVAL_MS = 2000;
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function TextEditor() {
  const { id: documentId } = useParams();
  //Using use state to make our sockets available anywhere inside our code
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  //This useEffect is to handle connection
  useEffect(() => {
    //Since we want to connect with socket.io once we will connect with it once
    const s = io("http://localhost:3001");
    setSocket(s);

    //Once work is done we disconnect
    return () => {
      s.disconnect();
    };
  }, []);

  //This useEffect handles any text change occuring on the page editor and sending to server
  useEffect(() => {
    if (socket == null || quill == null) return;
    //delta is anything small that changes on our editor
    //source is who changes it , user or programmitically it is changed
    const handler = (delta, oldDelta, source) => {
      //if source is not user then simply return
      if (source !== "user") return;
      //if source is user then we send the delta(that is a particular change) to the server
      socket.emit("send-changes", delta);
    };

    //This allows quill to handle any text changes and call handler function
    quill.on("text-change", handler);

    //Once we don't need it we turn off the quill and remove it
    return () => {
      //handler function will be removed
      quill.off("text-change", handler);
    };
  }, [socket, quill]);

  //This useEffect recieves changes and updates on the editor
  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta) => {
      //update the recieved changes inside the quill editor
      quill.updateContents(delta);
    };
    socket.on("receive-changes", handler);

    return () => {
      //handler function will be removed
      socket.off("receive-changes", handler);
    };
  }, [socket, quill]);

  //This useEffect makes a room based on the id generated
  useEffect(() => {
    if (socket == null || quill == null) return;

    //This will load the contents of document inside the id from the server
    socket.once("load-document", (document) => {
      quill.setContents(document);
      quill.enable();
    });

    //sends the documentID to server to create a room
    socket.emit("get-document", documentId);
  }, [socket, quill, documentId]);

  //This useEffect handles with the saving of documents
  useEffect(() => {
    if (socket == null || quill == null) {
      return;
    }
    const interval = setInterval(() => {
      socket.emit("save-document", quill.getContents());
    }, SAVE_INTERVAL_MS);

    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });
    q.disable();
    q.setText("Loading...");
    setQuill(q);
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
}
