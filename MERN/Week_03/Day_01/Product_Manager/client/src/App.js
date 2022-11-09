import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/products/:id/edit" element={<Update />} />
        </Routes>
    );
}

export default App;