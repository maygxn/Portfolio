import App from "./App"
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const Routes = [
    {
    path: "/",
    element: <App />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/About", element: <About /> },
        { path: "/Projects", element: <Projects /> },
        { path: "/Contact", element: <Contact /> },
        { path: "/Navbar", element: <Navbar /> },
        ],
    },
];

export default Routes;