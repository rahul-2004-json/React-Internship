import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchInTable from "./components/Search-sort-component/Parent-Search-sort/index";
import Card from "./components/Service-status-component/ParentCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/viewdetails" element={<SearchInTable />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
