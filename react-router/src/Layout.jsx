import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* Due to this outlet Header and Footer will remain constant at every page and only the middle portion will change due to outlet - its like
      dynamic pages being passed inside
       */}
      <Footer />
    </>
  );
}

export default Layout;
