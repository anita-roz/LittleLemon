import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Nav /> {/*done */}
      <Main /> {/* inside: Headers / Booking / ConfirmedBooking */}
      <Menu />
    </>
  );
}

export default App;
