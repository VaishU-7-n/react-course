import { DeliveryOptions } from "./DeliveryOptions";
import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useState } from "react";

export function CartItemDetails({ cartItem, deliveryOptions, loadCart }) {

  const [qty, setQty] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  function changeQuantity(event)
  {
    setQuantity(event.target.value);
  }

  const changeCartQty = async ()=>{
    if(qty)
    {
      await axios.put(`/api/cart-items/${cartItem.productId}`,{
      quantity:Number(quantity)
    });
    await loadCart();
      setQty(false);

    }
      
    else
      setQty(true);
  }

  


  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  return (
    <div className="cart-item-details-grid">
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>

        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>

        <div className="product-quantity">
          <span>
            Quantity: { qty ? <input type="text" className="quantity-textbox" 
             value ={quantity} 
             onChange={changeQuantity}
            />: <span className="quantity-label">{cartItem.quantity}</span>}  
          </span>

          <span className="update-quantity-link link-primary" onClick={changeCartQty}>Update</span>

          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>

      <DeliveryOptions
        cartItem={cartItem}
        deliveryOptions={deliveryOptions}
        loadCart={loadCart}
      ></DeliveryOptions>
    </div>
  );
}
