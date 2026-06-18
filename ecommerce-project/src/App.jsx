
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Routes, Route } from 'react-router';
import { TrackPackage } from './pages/TrackPackage'
import { OrdersPage } from './pages/OrdersPage';
import { NotFound } from './pages/NotFound'
import './App.css'
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {
   const [ cart , setCart ] = useState([]);

   useEffect(()=>{ 
     axios.get('/api/cart-items?expand=product')
    .then((response)=>{
     setCart(response.data);
    });

   },[]);
  return (
    <Routes>
      <Route path = "/" element={ <HomePage cart = {cart}/>}></Route>
      <Route path = "checkout" element={<CheckoutPage cart ={cart}/>}></Route>
      <Route path = "orders" element = {<OrdersPage/>}></Route>
      <Route path = "tracking" element = {<TrackPackage/>}></Route>
      <Route path = "*" element = {<NotFound/>}></Route>
    </Routes>
  
  )
}

export default App
