 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
   return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/muahmuah" element={<Muahmuah />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/musinsa" element={<Musinsa />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/members" element={<Members />} />
          <Route path="/new" element={<New />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/snap" element={<Snap />} />

          <Route path="/shirts" element={<Shirts />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/sports" element={<Sports />} />

     </Routes>
    
    </Router>
  )
}


export default App
