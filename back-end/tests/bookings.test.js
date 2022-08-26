const app = require('../');
const request = require('supertest')(app);

test('creates a new booking', async () => {
  const passengerToCreate = {
    name: 'Test passenger',
    location: 'Bilkent',
  };

  const driverToCreate = {
    name: 'Test driver',
    location: 'TOBB',
    age: 18,
  };

  const origin = '7.cadde';
  const destination = 'Tunus';

  const passengerResponse = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200);

  const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200);

  await request
    .post(`/passengers/${passengerResponse.body._id}/bookings`)
    .send({
      driverId: driverResponse.body._id,
      origin,
      destination,
    })
    .expect(200);
});
