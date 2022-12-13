import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Detail from './detail';
import Homepage from './Homepage';

function RouteLinks() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/news" element={<Detail/>} />
                    <Route path="/sports" element={<Detail/>} />
                    <Route path="/travel" element={<Detail/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteLinks;