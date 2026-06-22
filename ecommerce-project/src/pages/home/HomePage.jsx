import { Header } from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomePage= async() => {
      const response = await  axios.get("/api/products");
       setProducts(response.data);

    };
    getHomePage();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <title>ecommerce website</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

      <div className="home-page">
       <ProductsGrid products={products} loadCart = {loadCart}></ProductsGrid>
      </div>
    </>
  );
}
