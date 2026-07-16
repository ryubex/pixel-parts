import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

import './styles/App.css'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  )
}
export default App
