import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//Pages
import Homepage from "./pages/Home/Homepage";
import Dashboardpage from "./pages/Dashboard/Dashboardpage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboardpage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
