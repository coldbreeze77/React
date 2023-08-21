import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'

import {Home} from './components/Home';
import {Courses} from './components/Courses';
import {Services} from './components/Services';
import {Shop} from './components/Shop';
import {Membership} from './components/Membership';
import {Contact} from './components/Contact';

import {NoMatch} from './components/NoMatch';
import {Navbar} from './components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Courses' element={<Courses/>}/>
      <Route path='Services' element={<Services/>}/>      
      <Route path='Shop' element={<Shop/>}/>
      <Route path='Membership' element={<Membership/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='*' element={<NoMatch/>}/>

    </Routes>
    </>
  );
}

export default App;