const app = require('../..');
const request = require('supertest')(app);

test.skip('creates a new passenger', async () => {
  const passengerToCreate = {
    name: 'Test passenger',
    location: 'Moda',
  };

  const response = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200);

  const passengerCreated = response.body;

  expect(passengerCreated).toMatchObject(passengerToCreate);
  expect(passengerCreated.bookings).toEqual([]);
});
