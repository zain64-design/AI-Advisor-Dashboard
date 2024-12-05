import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './components/Layout/Layout';
import RouterLoader from './components/Loader/RouterLoader';
import Home from './pages/Home'
import News from './pages/News';
import Investment from './pages/Investment';
import Recommend from './pages/Recommend';
import Settings from './pages/Settings';

function App() {

  return (
    <>
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/news" element={<News/>} />
      <Route path="/investment-partner" element={<Investment/>} />
      <Route path="/recommendation" element={<Recommend/>} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
    </Layout>
  </BrowserRouter>
    </>
  )
}

export default App
