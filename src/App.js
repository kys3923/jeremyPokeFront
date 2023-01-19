import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';

const App = (props) => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;