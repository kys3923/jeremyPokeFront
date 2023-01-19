import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import PokeLanding from './pages/poke/PokeLanding';
import SearchPoke from './pages/poke/SearchPoke';

const App = (props) => {

  const LoggedInRoute = () => {
    if(sessionStorage.length === 0) {
      return <Navigate to='/login' />
    } else {
      return <Outlet />
    }
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />

          {/* Logged In Route */}
          <Route element={<LoggedInRoute />}>
            <Route path='/poke' element={<PokeLanding />} />
            <Route path='/poke/search' element={<SearchPoke />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}
export default App;