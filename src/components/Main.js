import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Headers from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() > 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { avainableTimes: fetchAPI(new Date()) };

  function updateTimes(state, date) {
    return { avainableTimes: fetchAPI(new Date(date)) };
  }

  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  }

  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Headers />} />
        <Route
          path='/booking'
          element={
            <Booking
              availableTimes={state.avainableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path='/confirmed' element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
