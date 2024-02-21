import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterJs from './components/FooterJs';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
    <Nav />
   <Routes>

    <Route element={<PrivateComponent />}>
    <Route path='/' element={<h1>Product listing component</h1>} />
    <Route path='/add' element={<h1>Add component</h1>} />
    <Route path='/update' element={<h1>Update component</h1>} />
    <Route path='/logout' element={<h1>Logout component</h1>} />
    <Route path='/profile' element={<h1>Profile listing component</h1>} /> 
    </Route>

    <Route path='/signup' element={<Signup/>} />
   </Routes>
   </BrowserRouter>
   <FooterJs/>
   </div>
   </>
  );
}

export default App;
