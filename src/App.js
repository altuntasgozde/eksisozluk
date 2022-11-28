import './App.css';
import NavbarItem from './components/NavbarItem';
import { Home } from './pages/Home';
import { NewEntry } from './pages/NewEntry';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <NavbarItem />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newentry" element={<NewEntry />}/>
     </Routes>
    </div>
  );
}

export default App;
