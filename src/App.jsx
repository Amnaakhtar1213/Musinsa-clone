 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

 import './App.css'
import Header from './components/Header/Head.jsx'
import Hero from './components/Hero/Hero.jsx'
import Muahmuah from './pages/Muahmuah.jsx'
import Beauty from './pages/Beauty.jsx'
import Best from './pages/Beauty.jsx'
import Musinsa from './pages/Musinsa.jsx'
import Fashion from './pages/Fashion.jsx'
import Members from './pages/Members.jsx'
import New from './pages/New.jsx'
import Sale from './pages/Sale.jsx'
import Snap from './pages/Snap.jsx'

import Accessories from './pages/Accessories.jsx'
import Bags from './pages/Bags.jsx'
import Hoodies from './pages/Hoodies.jsx'
import Pants from './pages/Pants.jsx'
import Shirts from './pages/Shirts.jsx'
import Shoes from './pages/Shoes.jsx'
import Sports from './pages/Sports.jsx'


function App() { 

const [favorite, setFavorite] = useState({});
  const [favoriteCount, setFavoriteCount] = useState(0);

  const toggleFavorite = (id) => {
    setFavorite((prev) => {
      const isFavorite = !prev[id];
      const newFavorite = { ...prev, [id]: isFavorite };

      // update count
      setFavoriteCount(Object.values(newFavorite).filter(Boolean).length);

      return newFavorite;
    });
  };


   return (
    <Router>
      <Header favoriteCount={favoriteCount} />
      <Routes>
          <Route path="/" element={<Hero favorite={favorite} toggleFavorite={toggleFavorite} />} />
          <Route path="/muahmuah" element={<Muahmuah favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/beauty" element={<Beauty favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/musinsa" element={<Musinsa favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/fashion" element={<Fashion favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/members" element={<Members favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/new" element={<New favorite={favorite} toggleFavorite={toggleFavorite}/>} /> 
          <Route path="/sale" element={<Sale favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/snap" element={<Snap favorite={favorite} toggleFavorite={toggleFavorite}/>} />

          <Route path="/shirts" element={<Shirts favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/pants" element={<Pants favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/hoodies" element={<Hoodies favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/shoes" element={<Shoes favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/bags" element={<Bags favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/accessories" element={<Accessories favorite={favorite} toggleFavorite={toggleFavorite}/>} />
          <Route path="/sports" element={<Sports favorite={favorite} toggleFavorite={toggleFavorite}/>} />

     </Routes>
    
    </Router>
  )
}


export default App
