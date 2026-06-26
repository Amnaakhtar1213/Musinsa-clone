import React, { useState, useEffect } from "react";
import Header from "../components/Header/Head.jsx";  
import confetti from "canvas-confetti";

const Cart = ({ cart, removeFromCart, favorite, toggleFavorite }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 6000);
  };

  useEffect(() => {
  if (orderConfirmed) {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }
}, [orderConfirmed]);




  return (
<>
 {/* <Header cart={cart} /> */}

<section className="mt-40 px-4 sm:px-6 md:px-10 lg:px-40">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
    My Shopping Bag 🛒
  </h2>

  {cart.length === 0 ? (
    <p className="text-gray-400 font-bold mt-12 text-center text-xl sm:text-2xl md:text-3xl">
      Your cart is empty
    </p>
  ) : (
    <div className="flex flex-col gap-8 mt-10">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row gap-6 border-b pb-8 items-center md:items-start"
        >
          {/* Left: Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto object-contain"
          />

          {/* Right: Product Details */}
          <div className="flex flex-col gap-4 w-full md:ml-10 lg:ml-20 mt-6 md:mt-0">
            <strong className="text-lg sm:text-xl">{item.name}</strong>
            <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
            <span className="text-red-800 font-bold text-base sm:text-lg">
              ${item.price}
            </span>

            {/* Delivery Info */}
            <div className="mt-4 bg-gray-100 p-4 rounded text-sm sm:text-base">
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
      <div className="text-right mr-0 md:mr-10">
        <p className="text-base sm:text-lg font-semibold">
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm sm:max-w-md">
        <h3 className="text-lg sm:text-xl font-bold text-green-700 mt-2">
          ✅ Your order is confirmed!
        </h3>
        <p className="mt-2">🎉🎉🎉</p>
        <p className="text-gray-700 mt-4">
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