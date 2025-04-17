import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;