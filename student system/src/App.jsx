import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
