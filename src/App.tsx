import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page </h1>} />
        <Route path="/upload" element={<h1>Upload Page </h1>} />
        <Route path="/report" element={<h1>Report Page </h1>} />
      </Routes>
    </>
  )
}

export default App;
