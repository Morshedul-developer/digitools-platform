import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PremiumTools from "./components/PremiumTools/PremiumTools";
import Status from "./components/Status/Status";
import Products from "./components/Products/Products";
import Carts from "./components/Carts/Carts";
import Steps from "./components/Steps/Steps";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import Workflow from "./components/Workflow/Workflow";

const productItems = fetch("/products.json").then((res) => res.json());

const pricingItems = fetch("/pricings.json").then((res) => res.json());

function App() {
  const [products, setProducts] = useState("products");
  const [cards, setCards] = useState([]);

  return (
    <>
      <Navbar cards={cards} />
      <Banner />
      <Status />
      <PremiumTools products={products} setProducts={setProducts} cards={cards} />
      {products === "products" && <Products productItems={productItems} cards={cards} setCards={setCards} />}
      {products === "carts" && <Carts cards={cards} setCards={setCards} />}
      <Steps/>
      <Pricing pricingItems={pricingItems}/>
      <Workflow/>
      <Footer/>
    </>
  );
}

export default App;
