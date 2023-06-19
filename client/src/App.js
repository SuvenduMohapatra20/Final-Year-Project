import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//Pages
import Homepage from "./pages/Home/Homepage";
import Dashboardpage from "./pages/Dashboard/Dashboardpage";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboardpage/>}/>
        <Route path="/home" element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
