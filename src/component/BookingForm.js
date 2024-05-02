import React, { useState } from 'react';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const handleBooking = () => {
    setConfirmation(true);
  };

  return (
    <div className="BookingForm">
      {confirmation ? (
        <p>Thank you for booking! Your reservation is confirmed.</p>
      ) : (
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          <button type="button" onClick={handleBooking}>Book Now</button>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
