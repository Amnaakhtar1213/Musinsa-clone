

 import { useNavigate } from "react-router-dom";
import React from "react";

const Wishlist = ({ wishlist, favorite, toggleFavorite, addToCart }) => {

   const navigate = useNavigate();

  const handleAddToBag = (product) => {
    addToCart(product);       // add item to cart
    navigate("/cart");     // redirect to cart page
  };



  return (
<section className="mt-20 mb-20 md:mt-40 lg:mt-40 mx-6 md:mx-10 lg:mx-20">
  <div className=" text-xl sm:text-3xl md:text-4xl 
      font-bold tracking-wider text-[#0a0f18] 
      text-center md:text-left
      flex flex-col md:flex-row md:items-center md:justify-center">
    <h2>
      My Wishlist <i className="fa-solid fa-heart text-red-800"></i>
    </h2>
  </div>

  <div className="mt-4">
    {wishlist.length === 0 ? (
      <p className="text-gray-500 mt-12 text-center">No Items in Wishlist</p>
    ) : (
      <ul
        className="
          grid gap-8 px-6
          sm:grid-cols-1
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {wishlist.map((product) => (
          <li key={product.id} className="mx-auto w-full">
           <div className="relative">
  <img
    src={product.image}
    alt={product.name}
    className="h-84 w-full object-contain"
  />
  <div className="
    absolute bottom-6 
    right-4 sm:right-8 md:right-4 lg:right-4 lg:bottom-8
    flex items-center
  ">
    <i
      className={`cursor-pointer ${
        favorite[product.id]
          ? "fa-solid fa-heart text-red-600"
          : "fa-regular fa-heart text-gray-200"
      }`}
      onClick={() => toggleFavorite(product.id, product)}
    ></i>
  </div>
</div>
            <div className="flex flex-col gap-1 mt-3 text-center">
              <strong className="font-medium">{product.name}</strong>
              <p className="text-sm text-gray-900">{product.description}</p>
              <span className="text-sm font-bold text-red-800 mt-2">
                ${product.price}
              </span>
              <button
                onClick={() => handleAddToBag(product)}
                className="mt-2 py-2 w-60 bg-blue-900 text-white rounded hover:bg-blue-950 mx-auto"
              >
                Add to Bag
              </button>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
</section>

  );
};

export default Wishlist;