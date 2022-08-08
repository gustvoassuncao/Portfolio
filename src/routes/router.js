import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header"
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";

export const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="About" element= {<About/>} />
                <Route path="Skills" element= {<Skills />} /> 
                <Route path="Portfolio" element={<Portfolio/>} />
                <Route path="Contact" element={<Contact />} /> 
        </Routes>
        </BrowserRouter>
    )
}