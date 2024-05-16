import './App.css';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Pricing from '../src/pages/Pricing'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar'
//import Reported from '../src/pages/Reported Threats'
import { Routes,BrowserRouter,Route}from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
   
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />} />
   <Route path='/contact' element={<Contact />} />
   <Route path='/pricing' element={<Pricing/>} />
 </Routes>
 
  <Sidebar/>
  </BrowserRouter>
  
  );
}

export default App;