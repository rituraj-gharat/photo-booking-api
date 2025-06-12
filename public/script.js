const form = document.getElementById('bookingForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const bookingData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    date: document.getElementById('date').value,
    location: document.getElementById('location').value
  };

  try {
    const res = await fetch('http://localhost:5050/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });

    if (!res.ok) throw new Error('Booking failed.');

    message.textContent = '✅ Booking successful!';
    message.style.color = 'green';
    form.reset();
  } catch (err) {
    message.textContent = '❌ ' + err.message;
    message.style.color = 'red';
  }
});
