import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assesment from './components/Assesment';
import Home from './components/Home';
import './index.css'
const root = createRoot(document.getElementById('root'));
export default function App() {
    return (
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Assesment" element={<Assesment />} />
         
        </Routes>
    );
  }
  
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

)