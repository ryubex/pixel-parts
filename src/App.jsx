import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';

import './styles/App.css'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <Outlet />

    </>
  )
}
export default App
