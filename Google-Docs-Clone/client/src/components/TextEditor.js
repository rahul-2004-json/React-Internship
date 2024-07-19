import React, { useCallback, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";

/*
wrapperRef is a callback function created with useCallback.
It takes wrapper (a DOM element) as an argument.
If wrapper is null, the function exits.
Clears wrapper's content with wrapper.innerHTML = "".
Creates a new div for the Quill editor.
Appends this new div to wrapper.
Initializes a Quill editor in the new div with the "snow" theme.

*/

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
  //Using use state to make our sockets available anywhere inside our code
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();

  useEffect(() => {
    //Since we want to connect with socket.io once we will connect with it once
    const s = io("http://localhost:3001");
    setSocket(s);

    //Once work is done we disconnect
    return () => {
      s.disconnect();
    };
  }, []);

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
    quill.on("text-changes", handler);

    //Once we don't need it we turn off the quill and remove it
    return () => {
      //handler function will be removed
      quill.off("text-changes", handler);
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
    setQuill(q);
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
}
