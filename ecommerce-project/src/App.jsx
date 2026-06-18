
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Routes, Route } from 'react-router';
import { TrackPackage } from './pages/TrackPackage'
import { OrdersPage } from './pages/OrdersPage';
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path = "/" element={ <HomePage />}></Route>
      <Route path = "checkout" element={<CheckoutPage />}></Route>
      <Route path = "orders" element = {<OrdersPage/>}></Route>
      <Route path = "tracking" element = {<TrackPackage/>}></Route>
      <Route path = "*" element = {<NotFound/>}></Route>
    </Routes>
  
  )
}

export default App
