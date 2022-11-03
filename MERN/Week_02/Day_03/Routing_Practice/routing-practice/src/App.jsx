import './App.css';
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App bg-light p-3 text-center">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:wordOrNumber" element={<Home/>} />
        <Route path="/:wordOrNumber/:fontColor/:backgroundColor" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;