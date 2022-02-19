import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cats from './cats/Cats';
import HomePage from './homePage/HomePage';
import NotFound from './NotFound';

function Routing(props) {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cats/:id" element={<Cats />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Routing;