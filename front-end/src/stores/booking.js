import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const useBookingStore = defineStore({
  id: 'booking',
  state: () => ({
    booking: [],
  }),
  actions: {
    async fetchPassengers() {
      const request = await axios.get('/passengers');
      return request.data;
    },
    async fetchDrivers() {
      const request = await axios.get('/drivers');
      return request.data;
    },
    async fetchPassenger(passengerId) {
      const request = await axios.get(`/passengers/${passengerId}`);
      return request.data;
    },
    async bookDriver({ passengerId, driverId, origin, destination }) {
      const request = await axios.post(`/passengers/${passengerId}/bookings`, {
        driverId,
        origin,
        destination,
      });

      return request.data;
    },
  },
});
