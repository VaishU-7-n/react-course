import { Header } from "../../components/Header";
import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from 'react-router';


export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomePage= async() => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
       setProducts(response.data);

    };
    getHomePage();
  }, [search]);

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
