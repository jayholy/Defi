import React from "react";
import About from "./About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Powers from "./components/Powers";
import Sus from "./components/Sus";

function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <About/>
     <Powers/>
     <Sus/>
     <Footer/>
    </div>
  );
}

export default App;
