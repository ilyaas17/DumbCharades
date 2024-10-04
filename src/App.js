import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Greeting from './components/Greeting';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/game' element={<Game/>}/>
        <Route path='/greet' element={<Greeting/>} />
      </Routes>
    </div>
  )
}
