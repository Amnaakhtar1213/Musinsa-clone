import React, { useState } from "react";
import Header from "../components/Header/Head.jsx";  

const Cart = ({ cart, removeFromCart }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 3000);
  };

  return (
<>
 <Header cart={cart} />
    <section className="mt-20 mx-30">
      <h2 className="text-3xl font-bold text-center mb-8">My Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 font-bold mt-50 text-center text-3xl ">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-10">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-10 border-b pb-8 items-start">
              {/* Left: Big Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-[300px] w-[300px] object-contain"
              />

              {/* Right: Product Details */}
              <div className="flex flex-col gap-4 w-full">
                <strong className="text-xl">{item.name}</strong>
                <p className="text-gray-700">{item.description}</p>
                <span className="text-red-800 font-bold text-lg">
                  ${item.price}
                </span>

                {/* Delivery Info */}
                <div className="mt-4 bg-gray-100 p-4 rounded">
                  <p><strong>Taxes:</strong> Included in price</p>
                  <p><strong>Estimated Delivery:</strong> 3–5 business days</p>
                  <p><strong>Delivery Information:</strong> Standard shipping</p>
                  <p><strong>Departure:</strong> Shipping from Korea</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 w-fit"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}

          {/* Total + Confirm Button */}
          <div className="text-right mt-6">
            <p className="text-lg font-semibold">
              Total: <span className="text-red-800">${totalPrice}</span>
            </p>
            <button
              onClick={handleConfirmOrder}
              className="mt-4 py-2 px-6 bg-green-700 text-white rounded hover:bg-green-800"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {/* Order Confirmation Popup */}
      {orderConfirmed && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-xl font-bold text-green-700">
              ✅ Your order is confirmed!
            </h3>
            <p className="text-gray-700 mt-2">
              Just wait a little bit while we process it.
            </p>
          </div>
        </div>
      )}
    </section>
</>

    
  );
};
export default Cart;