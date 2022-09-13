import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar"
import History from './components/History';
import Artists from './components/Artists';
import Home from "./components/Home"



function App() {
  return (
    <div className="App">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />}/>
        <Route path="/history" element={<History/>}/>
        

      </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
