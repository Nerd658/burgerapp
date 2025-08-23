import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/Contact.jsx";
import React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;