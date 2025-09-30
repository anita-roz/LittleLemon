import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm({ date, times, guests, occasion });
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* For Date Section */}
            <div>
              <label htmlFor='book-date'>Choose Date:</label>
              <input
                id='book-date'
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type='date'
                required
              />
            </div>

            {/* For Time Section */}
            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select
                id='book-time'
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required>
                <option value=''>Select a time</option>
                {props.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* For Number of Guests Section */}
            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input
                type='number'
                placeholder='1'
                min='1'
                max='10'
                id='book-guests'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>

            {/* For Occasion Section */}
            <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select
                id='book-occasion'
                value={occasion}
                key={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required>
                <option value=''>Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Wedding</option>
              </select>
            </div>
            {/* Submit Button */}
            <div className='btnReserve'>
              <input aria-label='On Click' type='submit' value={'Make Your Reservation'} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
