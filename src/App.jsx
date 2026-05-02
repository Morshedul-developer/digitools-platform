import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Status from "./components/Status/Status";
import Products from "./components/Products/Products";
import Carts from "./components/Carts/Carts";
import Steps from "./components/Steps/Steps";

const productItems = fetch("/products.json").then((res) => res.json());

function App() {
  const [products, setProducts] = useState("products");

  return (
    <>
      <Navbar />
      <Banner />
      <Status />
      <PremiumTools products={products} setProducts={setProducts} />
      {products === "products" && <Products productItems={productItems} />}
      {products === "carts" && <Carts />}
      <Steps/>
    </>
  );
}

export default App;
