 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
import './App.css'
import Header from './components/Header/Head.jsx'
import Hero from './components/Hero/Hero.jsx'
import Muahmuah from './pages/Muahmuah.jsx'


function App() { 
   return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/muahmuah" element={<Muahmuah />} />
     </Routes>
    
    </Router>
  )
}


export default App
