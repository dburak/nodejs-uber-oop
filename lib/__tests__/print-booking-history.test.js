const printBookingHistory = require('../print-booking-history');

test('prints passenger bookings', () => {
  const passenger = {
    name: 'Burak',
    bookings: [
      {
        passenger: { name: 'Burak' },
        driver: { name: 'Ahmet' },
        origin: 'Bahçeli',
        destination: 'Bilkent',
      },
    ],
  };
  const consoleSpy = jest.spyOn(console, 'log');

  printBookingHistory(passenger);

  expect(consoleSpy).toHaveBeenCalledWith(
    'Burak booked to Ahmet to travel from Bahçeli to Bilkent'
  );
  expect(consoleSpy).toHaveBeenCalledWith(
    'Burak booked to Ahmet to travel from Bahçeli to Bilkent'
  );
  expect(consoleSpy).toHaveBeenCalledWith(
    'Burak booked to Ahmet to travel from Bahçeli to Bilkent'
  );
  expect(consoleSpy).toHaveBeenCalledWith(
    'Burak booked to Ahmet to travel from Bahçeli to Bilkent'
  );

  consoleSpy.mockRestore();
});
