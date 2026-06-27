import { Link } from "react-router-dom";


export default function Dropdown({ isOpen, setIsOpen, position = "header" }) {
  if (!isOpen) return null;

return (
  <>
  <div  style={{ transitionDelay: "500ms" }}
  className={`fixed inset-x-0 top-30
              bg-white shadow-md border-t border-gray-300
              transition-transform transition-opacity duration-300 ease-in-out
              w-full h-[550px] lg:h-[500px] overflow-y-auto z-50
              ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}

>
    <ul className="flex flex-col lg:flex-row text-sm px-20 md:flex-row gap-5 md:gap-10 lg:gap-20 py-10 lg:px-40">
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <h2 className=" text-black tracking-wide font-bold">CLOTHING</h2>
      <li><Link to="/shirts" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Top</Link></li>
      <li><Link to="/shirts" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >outerwear</Link></li>
      <li><Link to="/pants" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >pants</Link></li>
      <li><Link to="/pants" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Dress & Skirts</Link></li>
      <li><Link to="/shirts" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Short sleeves</Link></li>
      <li><Link to="/shirts" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >long-sleeves</Link></li>
      <li><Link to="/shirts" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sweatshirts</Link></li>
      <li><Link to="/hoodies" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >hoodie jackets</Link></li>
      <li><Link to="/pants" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Jeans</Link></li>
      <li><Link to="/shirts" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Shirts & Blouse</Link></li>
      <li><Link to="/pants" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Track pants & Joggers</Link></li>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <h2 className="text-black tracking-wide font-bold">BAGS</h2>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Shoulder Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Bagpacks</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Canvas bags</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Totes</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Travel Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Belt Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Wallet cases</Link></li>
      <li><Link to="/bags"className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Pouches</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport Bags</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Clutches</Link></li>
      <li><Link to="/bags" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Bags Accessories</Link></li>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <h2 className="text-black tracking-wide font-bold">ACCESSORIES</h2>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Belt</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Caps & Bags</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Keyring & Key cases</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Fashion Accessories</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Necklace & pendants</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Earring</Link></li>
      <li><Link to="/accessories"className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Bracelets</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Rings</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Glasses</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Tech & Life</Link></li>
      <li><Link to="/accessories" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Pets</Link></li>
      </div>

<div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <h2 className="text-black tracking-wide font-bold">SHOES</h2>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sneakers</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Loafers</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Boots</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Scandals</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Heels and pumps</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Flat</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Flip Flops</Link></li>
      <li><Link to="/shoes" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport shoes</Link></li>
      <li><Link to="/pants" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Track pants & Joggers</Link></li>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <h2 className="text-black tracking-wide font-bold">ACTIVE</h2>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport Tops</Link></li>
      <li><Link to="/pants" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport pants</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sports outerwear</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport Skirts</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport Bags</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sports Gears</Link></li>
      <li><Link to="/sports"  className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sports Goods</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sports cloth</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sports Dress</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Sport Hat</Link></li>
      <li><Link to="/sports" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} ></Link>Sports</li>
      </div>
      
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      <h2 className="text-black tracking-wide font-bold">BEAUTY</h2>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Skincare</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Facial Mask</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Bae makeup</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Eye makeup</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Haircare</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Cleanser</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Body care</Link></li>
      <li><Link to="/beauty" className="text-gray-700 text-xs font-normal" onClick={() => setIsOpen(false)} >Beauty Devices & Tools</Link></li>
      </div>
      
    </ul>
  </div>
  </>
)
}
