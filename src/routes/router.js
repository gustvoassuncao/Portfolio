import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header"

export const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<HomePage/>} />
                <Route path="About" element= {<About/>} />
                <Route path="Skills" element= {<Skills/>} /> 
                <Route path="Projects" element={<Projects/>} />
                <Route path="Contact" element={<Contact />} /> 
        </Routes>
        </BrowserRouter>
    )

}