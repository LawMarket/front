import React from 'react';
import Header from "../src/components/Layout/Header/Header";
import Footer from "../src/components/Layout/Header/Footer";
import LawyersCards from '../src/components/Lawyers/LawyersCards';
import FlipCard from '../src/components/Cards/FlipCard';


function App() {
  return (
    <div className="App">
    <Header />
    <FlipCard />
    <LawyersCards />
    <Footer />
    </div>
  );
}

export default App;
