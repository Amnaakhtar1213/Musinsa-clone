 import { useLocation, useNavigate } from "react-router-dom";

 import {AcceProductMap} from "../data/AcceProductMap.jsx"
 import {BagProductMap} from '../data/BagProductMap.jsx'
 import {BeautyProductMap} from "../data/BeautyProductMap.jsx";
 import {HoodieProduct} from '../data/HoodieProductMap.jsx'
 import {MuahProduct} from "../data/MuahProductMap.jsx";
 
 import {PantMap} from '../data/PantMap.jsx';
 import {ShirtMap} from "../data/ShirtMap.jsx"
 import {ShoesMap} from '../data/ShoesMap.jsx'
 import {SportMap} from '../data/SportMap.jsx'


 const allProducts = [
  ...Object.values(ShoesMap),
   ...Object.values(AcceProductMap),
    ...Object.values(BagProductMap),
    ...Object.values(BeautyProductMap),
     ...Object.values(HoodieProduct),
      ...Object.values(PantMap),
       ...Object.values(ShirtMap),
       ...Object.values(SportMap),
        ...Object.values(MuahProduct),
 ]

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search({ favorite, toggleFavorite, addToCart }) {
  const query = useQuery().get("query") || "";
  const navigate = useNavigate();

  const filteredProducts = allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    // <div className="p-6 mt-35">
    //   <h2 className="text-2xl font-bold">Search Results for "{query}"</h2>
    //   <ul className="grid grid-cols-5 gap-6 mt-8">
    //     {filteredProducts.map((product) => (
    //       <li key={product.id} className="border p-4 rounded-md">
    //         <div className="relative">
    //           <img src={product.image} alt={product.name} />
    //           <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
    //             {product.discount && (
    //               <span className="bg-black text-white px-2">{product.discount}</span>
    //             )}
    //             <i
    //               className={`cursor-pointer ${
    //                 favorite[product.id]
    //                   ? "fa-solid fa-heart text-red-600"
    //                   : "fa-regular fa-heart text-white"
    //               }`}
    //               onClick={() => toggleFavorite(product.id, product)}
    //             ></i>
    //           </div>
    //         </div>
    //         <div className="flex flex-col gap-1 mt-3">
    //           <strong className="font-medium">{product.name}</strong>
    //           <p className="text-sm text-gray-900">{product.description}</p>
    //           <span className="text-sm font-bold text-red-800">${product.price}</span>
    //           <button
    //             onClick={() => {
    //               addToCart(product);
    //               navigate("/cart");
    //             }}
    //             className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
    //           >
    //             Add to Bag
    //           </button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

<div className="p-6 mt-40">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
    Search Results for "{query}"
  </h2>

  <ul
    className="
      grid gap-6 mt-8
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-5
    "
  >
    {filteredProducts.map((product) => (
      <li key={product.id} className="border p-4 rounded-md">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] sm:h-[500px] md:h-[450px] lg:h-72 object-cover rounded"
          />
          <div className="absolute bottom-2 left-0 right-2 flex justify-between items-center">
            {product.discount && (
              <span className="bg-black text-white px-2 text-xs sm:text-sm">
                {product.discount}
              </span>
            )}
            <i
              className={`cursor-pointer ${
                favorite[product.id]
                  ? "fa-solid fa-heart text-red-600"
                  : "fa-regular fa-heart text-white"
              }`}
              onClick={() => toggleFavorite(product.id, product)}
            ></i>
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-3">
          <strong className="font-medium text-sm sm:text-base">
            {product.name}
          </strong>
          <p className="text-xs sm:text-sm text-gray-900">
            {product.description}
          </p>
          <span className="text-sm font-bold text-red-800">
            ${product.price}
          </span>
          <button
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-xs sm:text-sm"
          >
            Add to Bag
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}