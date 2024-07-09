import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // for handling any route related error on client side
    loader: rootLoader,
    action: rootAction,
    //Here child route will be rendered in the Root component only not in different page
    children: [
      {
        path: "contacts/:contactId", //here :contactid is Dynamic variable
        // The colon (:) has special meaning, turning it into a "dynamic segment".
        //Dynamic segments will match dynamic (changing) values in that position of the URL, like the contact ID. We call these values in the URL "URL Params", or just "params" for short.
        element: <Contact />,
        loader: contactLoader,
      },
      //We want it to be rendered in the root route's outlet, so we made it a sibling to the existing child route.
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This is root route since rest of the route will be rendered inside it */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
