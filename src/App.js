import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Findtutor from './pages/Findtutor';
import Findstudent from './pages/Findstudent';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Reviews from './pages/Reviews';

import Footer from './components/Footer';

function App() {
    return (
        <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Findtutor" element={<Findtutor />} />
                <Route path="/Findstudent" element={<Findstudent />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Reviews" element={<Reviews />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
        </>
    );
};


export default App;