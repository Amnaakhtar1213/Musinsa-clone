// import React from "react";

// const Wishlist = ({ wishlist }) => {
//   return (
//     <section className="mt-35">
//       <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18] text-center">
//         <h2>
//           My Wishlist <i className="fa-solid fa-heart text-red-800"></i>
//         </h2>
//       </div>

//       <div className="mx-30">
//         {wishlist.length === 0 ? (
//           <p className="text-gray-500 mt-12 text-center">No Items in Wishlist</p>
//         ) : (
//           <ul className="flex flex-row flex-wrap gap-4 mt-12">
//             {wishlist.map((product) => (
//               <li key={product.id} className="w-1/5 border p-4 rounded">
//                 <div className="relative">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-1 mt-3 text-center">
//                   <strong className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
//                     {product.name}
//                   </strong>
//                   <p className="text-sm text-gray-900">{product.description}</p>
//                   <span className="text-sm font-bold text-red-800">
//                     ${product.price}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Wishlist;






 import { useNavigate } from "react-router-dom";
import React from "react";

const Wishlist = ({ wishlist, favorite, toggleFavorite, addToCart }) => {

   const navigate = useNavigate();

  const handleAddToBag = (product) => {
    addToCart(product);       // add item to cart
    navigate("/cart");     // redirect to cart page
  };



  return (
    // <section className="mt-35">
    //   <div className="mx-30 mt-8 text-4xl font-bold tracking-wider text-[#0a0f18] text-center">
    //     <h2>
    //       My Wishlist <i className="fa-solid fa-heart text-red-800"></i>
    //     </h2>
    //   </div>

    //   <div className="mt-15">
    //     {wishlist.length === 0 ? (
    //       <p className="text-gray-500 mt-12 text-center">No Items in Wishlist</p>
    //     ) : (
    //       <ul className="grid grid-cols-5 gap-8 mx-30 ">
    //         {wishlist.map((product) => (
    //           <li key={product.id} className="w-[300px]">
    //             <div className="relative">
    //               <img
    //                 src={product.image}
    //                 alt={product.name}
    //                 className="h-[300px] w-[400px] object-contain"
    //               />
    //               <div className="absolute bottom-2 right-9 flex justify-between items-center">
    //                 <i
    //                   className={`cursor-pointer ${
    //                     favorite[product.id]
    //                       ? "fa-solid fa-heart text-red-600"
    //                       : "fa-regular fa-heart text-gray-200"
    //                   }`}
    //                   onClick={() => toggleFavorite(product.id, product)}
    //                 ></i>
    //               </div>
    //                </div>
    //                <div className="flex flex-col gap-1 mt-3 ml-6">
    //               <strong className="font-medium">
    //                 {product.name}
    //               </strong>
    //               <p className="text-sm text-gray-900">{product.description}</p>
    //               <span className="text-sm font-bold text-red-800">
    //                 ${product.price}
    //               </span>
    //               <button
    //                 onClick={() => handleAddToBag(product)}
    //                 className="mt-2 py-2 w-60 bg-blue-900 text-white rounded hover:bg-blue-950"
    //               >
    //                 Add to Bag
    //               </button>
    //             </div>
              
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </section>

<section className="mt-30 md:mt-40 lg:mt-40">
  <div className=" mx-30 
  text-2xl sm:text-3xl md:text-4xl 
  font-bold tracking-wider text-[#0a0f18] 
  text-center md:text-left
  flex flex-col md:flex-row md:items-center md:justify-center">
    <h2>
      My Wishlist <i className="fa-solid fa-heart text-red-800"></i>
    </h2>
  </div>

  <div className="mt-10">
    {wishlist.length === 0 ? (
      <p className="text-gray-500 mt-12 text-center">No Items in Wishlist</p>
    ) : (
      <ul
        className="
          grid gap-8 mx-25
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
        "
      >
        {wishlist.map((product) => (
          <li key={product.id} className="mx-auto">
           <div className="relative">
  <img
    src={product.image}
    alt={product.name}
    className="h-[300px] w-[400px] object-contain"
  />
  <div className="
    absolute bottom-2 
    right-8 sm:right-8 md:right-10 lg:right-8
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
              <span className="text-sm font-bold text-red-800">
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