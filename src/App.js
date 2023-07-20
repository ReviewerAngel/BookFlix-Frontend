import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import ReservationForm from './pages/ReservationForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddService from './pages/AddService';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import DeleteServices from './pages/DeleteService';
import MobileNav from './components/MobileNav';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

const App = () => {
  useEffect(() => {
    const pathname = window.location.pathname.slice(1);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.className = pathname;
    }
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container-fluid col-md-12 d-flex p-0">
      <button
        type="button"
        className={`btn btn-link btn-sidebar-toggle ${sidebarOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      >
        <span className="hamburger-icon" />
      </button>
      <BrowserRouter>
        <>
          <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <MobileNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              exact
              path="/reservations"
              element={<PrivateRoute />}
            >
              <Route
                exact
                path="/reservations"
                element={<Reservations />}
              />
            </Route>
            <Route
              exact
              path="/reserve"
              element={<PrivateRoute />}
            >
              <Route
                exact
                path="/reserve"
                element={<ReservationForm />}
              />
            </Route>
            <Route
              exact
              path="/add-service"
              element={<AdminRoute />}
            >
              <Route
                exact
                path="/add-service"
                element={<AddService />}
              />
            </Route>
            <Route
              exact
              path="/delete-services"
              element={<AdminRoute />}
            >
              <Route
                exact
                path="/delete-services"
                element={<DeleteServices />}
              />
            </Route>
            <Route exact path="/services/:id" element={<Details />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
