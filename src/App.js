import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav /> {/* done */}
      <Main /> {/* inside: Headers / Booking / ConfirmedBooking */}
      <Menu /> {/* done */}
      <Footer />
    </>
  );
}

export default App;
