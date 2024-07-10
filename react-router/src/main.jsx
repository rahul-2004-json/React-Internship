import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfo } from "./components/Github/Github";
import Details from "./components/Details/Details";

// One way of creating the Routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     // This children is here passed for nested routing and all the routes inside this children will be displayed in <Outlet/> section
//     //We can pass here list of multiple routes
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

//Best Way to do it as it is more readable
//2nd way of creating the Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    // Here Layout is the main element that is getting rendered on the page and inside it we have childrens
    <Route path="/" element={<Layout />}>
      {/* Childrens or Nested routes in the Layout components */}
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userId" element={<User />} />
      {/* userId variable is very important as by this variable only we will be able to fetch it from useParams */}
      <Route path="/github" loader={githubInfo} element={<Github />} />
      <Route path="/details" element={<Details />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
