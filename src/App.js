import React from "react";
import '../src/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import{ Header, Navbar } from './Component/Component'
import {Trending, Movie, TvSeries, Search }from './Pages/Pages'

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <div className="App">
    <div className="container">
    
      <Routes>
        <Route exact path="/" element={<Trending/>} />
        <Route path="/movie" element={<Movie/>} />
        <Route path="/tvseries" element={<TvSeries/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
    </div>
    <Navbar/>
   </BrowserRouter>
   
   </>
  );
}

export default App;
