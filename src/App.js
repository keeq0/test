import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Findtutor from './pages/Findtutor';
import Findstudent from './pages/Findstudent';
import Profile from './pages/profile';
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
                <Route path="/findtutor" element={<Findtutor />} />
                <Route path="/findstudent" element={<Findstudent />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
        </>
    );
};


export default App;