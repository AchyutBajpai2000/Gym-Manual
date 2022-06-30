import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />}/> 
        </Routes>
        <Footer/>
    </div> //Box is just like a div with some styling and the id in second path is dynamic
  )
}

export default App