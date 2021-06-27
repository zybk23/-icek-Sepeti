import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Aktivites from "./components/Aktivites";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <SubHeader />
      <Categories />
      <Products />

      <Aktivites />
      <Footer />
    </div>
  );
}

export default App;
