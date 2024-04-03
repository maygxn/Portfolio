import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {

  // Configure our Router
  const router = createBrowserRouter([
    {
      path: "/",
      // Props to Home get passed here
      element: <Home />
    },
    {
      path: "/about",
      // Props to About get passed here
      element: <About />
    },
    {
      path: "/projects",
      // Props to Projects get passed here
      element: <Projects />
    },
    {
      path: "/contact",
      // Props to Contact get passed here
      element: <Contact />
    }
  ]);


  return (
    <div className="App">
      <div className="content">
        {/* RouterProvider switches between Home, About, NewPostForm, and History */}
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;