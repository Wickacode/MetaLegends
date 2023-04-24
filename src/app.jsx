import Home from "./pages/Home";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
