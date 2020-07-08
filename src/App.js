import React from 'react';
import Header from "../src/components/Layout/Header/Header";
import Footer from "../src/components/Layout/Header/Footer";
import LawyersCards from '../src/components/Lawyers/LawyersCards';

function App() {
  return (
    <div className="App">
    <Header />
    <LawyersCards />
    <Footer />
    </div>
  );
}

export default App;
