import React, { useState, useEffect } from "react";
import Header from "../components/Header/Head.jsx";  
import confetti from "canvas-confetti";

const Cart = ({ cart, removeFromCart }) => {
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
 <Header cart={cart} />
    <section className="mt-40 mx-40">
      <h2 className="text-4xl font-bold text-center">My Shopping Bag 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 font-bold mt-50 text-center text-3xl ">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4 mt-15">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-10 border-b pb-8 items-start">
              {/* Left: Big Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-[450px] w-[450px] object-contain"
              />

              {/* Right: Product Details */}
              <div className="flex flex-col gap-4 w-full ml-40 mt-10">
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
          <div className="text-right mr-10">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50  backdrop-blur-md">
          <div className="bg-white p-6 rounded shadow-lg text-center w-100 h-50">
            <h3 className="text-xl font-bold text-green-70 mt-5">
              ✅ Your order is confirmed!
            </h3>
            <p className="mt-2">🎉🎉🎉</p>
            <p className="text-gray-700 mt-5">
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